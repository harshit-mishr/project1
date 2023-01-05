



import React, { useState } from "react";
 
import { FaLock ,FaUserAlt} from "react-icons/fa";
import RegisterStyle from "./Register.module.css"
 
 
export default function Register() {
     
    const[password , setPassword] = useState("")
    const[userName , setUserName] = useState("")
    const[mes , setMes] = useState("")
    const[uMes , setUMes] = useState("")
    

    const Validation = (event) => {
        event.preventDefault()
         if (!password) {
            setMes("pw is Not Valid");
          } else {
            setMes("");
          }

          const userRegEx=/^[a-z]*$[0-9]/

          if (userRegEx.test(userName)) {
          //  setUMes("userName is Valid");
          } else if (!userName ) {
            setUMes("userName is Requird");
          } else {
            setUMes("");
          }
           // alert("GO TO THE LOGIN PAGE")
      };
     
      //alert("GO TO THE LOGIN PAGE")
    return(
        <>
         
        <div className={RegisterStyle.wrap}>
        <form className={RegisterStyle.box}>
        <div>
        <label><FaUserAlt style={{fontSize:"2em"}}/></label>
        <input value={userName} onChange={(e)=>setUserName(e.target.value)} className={RegisterStyle.input}  placeholder="Username" type="text"/>
        <p>{uMes}</p>
        </div>
        <div>
        <label><FaLock style={{fontSize:"2em"}}/></label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} className={RegisterStyle.input}  placeholder="Password" type="password"/>
        <p>{mes}</p>
        <div>
        <br/>
        <button onClick={Validation}>Submit</button>
        </div>
        </div>
        
        </form>
        
        </div>
        </>
    )
}