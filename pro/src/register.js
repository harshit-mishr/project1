
import React, { useState , useEffect } from "react";
import { MdMailOutline } from "react-icons/md";
import { FaLock ,FaUserAlt} from "react-icons/fa";
import RegisterStyle from "./Register.module.css"
// import Navbar from "./Navbar";
export default function Register() {
    const[email , setEmail] = useState("")
    const[password , setPassword] = useState("")
    const[userName , setUserName] = useState("")
    const[mes , setMes] = useState("")
    const[uMes , setUMes] = useState("")
    const[message , setMessage] = useState("")
    const[data,setData] = useState([])
    const[LocalStorage,setLocalStorage] = useState([])

    // useEffect(()=>{
    //   if(localStorage ){


    //   }
    // })


    const emailValidation = (event) => {
        event.preventDefault()
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

        const pwRegEx = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/

        const userRegEx= /^[a-zA-Z0-9]+([_\s/\-]?[a-zA-Z0-9])*$/

        if (regEx.test(email) || pwRegEx.test(password) || userRegEx.test(userName)) {
          setMessage("Email is Valid");
          setMes("pw is Valid");

          setUMes("userName is Valid");
        } else if ((!regEx.test(email) && email !== " " )|| (!pwRegEx.test(password) && password !== " ") || (!userRegEx.test(userName) && userName !== " ")) {
          setMessage("Email is Not Valid");
          setMes("pw is Not Valid");
          setUMes("userName is Not Valid");
        } else {
          setMessage("");
          setMes("");
          setUMes("");
        }


      
          if (message === "Email is Valid" &&  mes === "pw is Valid" && uMes === "userName is Valid") {
          const  newUserData = {Email : email , UserName : userName , Password : password }
          console.log(newUserData)

          setLocalStorage([...LocalStorage,newUserData]);
          localStorage.setItem("Users",JSON.stringify(LocalStorage));

          alert(JSON.parse(localStorage.getItem('Users')));
          }

         
  
      };
     

    return(
        <>
        {/* //<Navbar/> */}
        <div className={RegisterStyle.wrap}>
        <form onSubmit={emailValidation} className={RegisterStyle.box}>
        <div >
        <label htmlFor="email"><MdMailOutline style={{fontSize:"2em"}}/></label>
        <input required name="email" className={RegisterStyle.input} placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <p style={{color:"red" ,}}>{message }</p>
        </div>
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
        <button onClick={emailValidation}>Submit</button>
        </div>
        </div>
        
        </form>
        
        </div>
       

        </>

    )
}