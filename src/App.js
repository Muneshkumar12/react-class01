import React, {useState} from "react";
import About from './About'
import Contact from './Contact'
import './App.css'
// var name = "munesh";
const deleteUser=(id)=>{
alert("id>>>>>>>>>>"+id)
}
const App = () => {
  const [activatPage, setActivatPage]=useState("home")
  const [updateName,setName]=useState("munesh")
  console.log(activatPage)
  return (
    <div>
      <button onClick={()=>setActivatPage("home")}>Home</button>
      <button onClick={()=>setActivatPage("About")}>About</button>
      <button onClick={()=>setActivatPage("Contact")}>Contact</button>
      {/* <h1>home page</h1> */}
      {activatPage === "home" && <h1>Home Page</h1>}
      {activatPage === "About" && <About/>}
      {activatPage === "Contact" && <Contact/>}
      {/* <About/> */}
      {/* <Contact/> */}
      {/*  */}
      <p>{updateName}</p>
      <button onClick={()=>setName("Munesh Kumar")}>update name</button>
      <button onClick={()=>deleteUser("235sdfw")}>delete</button>
    </div>
  )
}
export default App