import React from 'react';
import NavBar from '../navbar/NavBar.css'
import { Icon } from '@iconify/react';


const Navbar = () => {
  return (
    <div className ='container'>
      <div className="navBar">
        <div className="firstNavBar">
           <div className="navIcon">
             <Icon icon="emojione-monotone:e-mail" color="rgb(87,213,182)" width="61"/>
           </div>
           <div className="navText">
              <p>EPay</p>
           </div>
         </div>
         <div className='navigation'>
           <ul>
              <li><a href="http../"><span>Personal</span></a></li>
              <li><a href="http../">Buisness</a></li>
              <li><a href="http../">Documentation</a></li>
              <li><a href="http../">Company</a></li>
            </ul>
         </div>
          <div className="buttonDiv">
             <button id='sign'>SignUp</button>
             <button id='log'>Login</button>
          </div>
      </div>
   </div>
  )
}
export default Navbar;