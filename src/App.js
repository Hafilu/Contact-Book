import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import NotFound from "./Pages/NotFound";
import Nav from "./Components/Nav";
import { useEffect, useState } from "react";

function App() {
  const [Contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContact = async () => {
      const contactfromserver = await fetchContact();
      setContacts(contactfromserver);
    };

    getContact();
  }, []);

  const formSub = async (data) => {
    const res = await fetch("http://localhost:3004/contacts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newdata = await res.json();
    if (res.ok) {
      setContacts([...Contacts, newdata]);
    }
  };

  const fetchContact = async () => {
    const res = await fetch("http://localhost:3004/contacts");
    const data = await res.json();
    return data;
  };

  const dltContact = async (id) => {
    const res = await fetch(`http://localhost:3004/contacts/${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      let newContact = Contacts.filter((singleContact) => {
        return singleContact.id !== id;
      });
      setContacts(newContact);
    }
  };

  const getCon = async (id) => {
    const res = await fetch(`http://localhost:3004/contacts/${id}`);
    const data = await res.json();
    return data;
  };

  const favToggle = async (id) => {
    const singlecon = await getCon(id);
    const updtTask = { ...singlecon, fav: !singlecon.fav };

    const res = await fetch(`http://localhost:3004/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updtTask),
    });

    if (res.status === 200) {
      let updatedContact = Contacts.map((singleContact) => {
        return singleContact.id === id
          ? { ...singleContact, fav: !singleContact.fav }
          : singleContact;
      });
      setContacts(updatedContact);
    }
  };

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              formSub={formSub}
              Contacts={Contacts}
              dltContact={dltContact}
              favToggle={favToggle}
            />
          }
        />
        <Route
          path="/Favourites"
          element={
            <Favourites
              Contacts={Contacts}
              dltContact={dltContact}
              favToggle={favToggle}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
