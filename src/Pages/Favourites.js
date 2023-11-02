import Contact from "../Components/Contact";

function Favourites({Contacts, dltContact, favToggle}) {
  return (
    <div>
       {Contacts.map((singlecontact)=>{
        return(
            singlecontact.fav &&(
                <Contact key={singlecontact.id} contact={singlecontact} dltContact={dltContact} favToggle={favToggle}/>
            )
        );
       })}
       {Contacts.filter((single) => single.fav).length ===0 && <h2 className="left"> No Favourites</h2>} 
    </div>
    
    
  );
}

export default Favourites
