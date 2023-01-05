import React from 'react'
import {Link} from 'react-router-dom'
import Homestyle from './Home.module.css'
import { BiAlignRight }  from "react-icons/bi";
// import { BiUser } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { useState } from 'react'


 const Home = () => {
  const[show, setShow] = useState(true)
  return (
    <div className={Homestyle.Nav}>
    <div className={Homestyle.logo}>
  <Link to = "/">
  <img src='https://png.pngtree.com/png-clipart/20200709/original/pngtree-initial-letter-hm-logo-template-png-image_3580264.jpg' width='70px' /> </Link>
    </div>
     
    <div className={Homestyle.links} id={show ? '' : Homestyle.menu} >
      <Link className={Homestyle.Link} to='/about'>about us</Link>
      <Link className={Homestyle.Link} to='/register'>Ragister</Link>
     <Link className={Homestyle.Link} to='/login'>login</Link>
    </div>
     {show ? 
     <div className={Homestyle.mobile} >   
     <BiAlignRight onClick={()=>setShow(false)}/>
     
     </div>
     :
     <div>
     <ImCross onClick={()=>setShow(true)}/>
     </div>
 }
     

    </div>
   

  )
}
export default Home;
