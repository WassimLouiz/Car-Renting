import React from 'react';
import About from'./about';
import './about.css'
import './contact.css'
import facebook from './icon/facebook.png'
import instagram from './icon/insta.png'
import twitter from './icon/twitter.png'

const Contact =() => {

    return (
      
     
         <div id="contact" class="footer">
            <div class="container-contact">
               <div class="row-contact pdn-top-30">
                  
                  <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                     <div class="Follow">
                        <About/>
                     </div>
                  </div>
                  
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                     <div class="Follow">
                        <h1> CONTACT</h1>
                        <span>
                        <p>123 Second Street Fifth Avenue</p>
                        <p>Tunis</p><p> +216 20710827</p>
                        </span>
                        <div class="row-contact">
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                              <input class="Newsletter" placeholder="Name" type="text"/>
                           </div>
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                              <input class="Newsletter" placeholder="Email" type="text"/>
                           </div>
                           <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                              <textarea class="textarea" placeholder="comment" type="text">Comment</textarea>
                           </div>
                        </div>
                        <button class="Subscribe">Submit</button>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
   
    )
  }

 
export default Contact ;