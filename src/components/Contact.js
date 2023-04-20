import React from 'react';
import { FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
   <section id='contact'>
     <div className="cont relative bg-gray-200 h-screen">
      <h1 style={{textAlign:'center',color:'white',fontSize:'3em',fontWeight:'700'}}>Contact</h1>
     <div className='contact'>
     <div className='div1'>
       <p>Email : Harishmanoharan@gamil.com</p>
       <p>Phone : 7339374371</p>
       <p>address : skcet,coimbatore.</p>
    </div>
    
    
     </div>
      <div className="container23    mx-auto flex justify-center bottom-0 left-0 right-0 mb-6">
        <div className="flex mt-4 items-center mx-4 mb-5">
          <a href='https://instagram.com/iamharish___05___?igshid=YmMyMTA2M2Y='>
 <FaInstagram className="mr-5 hover:text-red-700" size={32} />
          </a>
          <a href='https://www.facebook.com/'>
  <FaFacebook className="mr-5 hover:text-blue-700" size={32} />
            </a>
            <a href='https://in.linkedin.com/'>
<FaLinkedin className="mr-5 hover:text-blue-700 " size={32} />
            </a>
            <a href='https://github.com/727721HARISH050'>
<FaGithub className="mr-5 hover:text-red-700" size={32} />
            </a>
          
        
         
          
        </div>
      </div>
    </div>
   </section>
  );
}

export default Contact;
