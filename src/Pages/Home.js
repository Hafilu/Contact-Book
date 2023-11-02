import Contact from "../Components/Contact"
import Forms from "../Components/Forms"

function Home({formSub, Contacts ,dltContact, favToggle}) {
  return (
    <div>
      <Forms formSub={formSub}/>
      {Contacts.map((singlecontact)=>{
        return <Contact key={singlecontact.id} contact={singlecontact} dltContact={dltContact} favToggle={favToggle}/> ;
      })}

      {Contacts.length===0 && <div className="left">No Contact To Show</div>}
      
    </div>
  )
}

export default Home
