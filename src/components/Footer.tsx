import React from "react"
import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <div className="pt-6 text-white bg-[#001b5e]">
        <p>Telefonnummer: 079 313 8071</p>
        <p>E-mail: <a href="mailto:Rikke.kristiansen@hotmail.com">Rikke.kristiansen@hotmail.com</a></p>

 <div className="flex justify-around my-6 pb-6"> 
 <a href="https://www.linkedin.com/in/rikke-kristiansen-73a582152/"> 
 <FaLinkedinIn className="cursor-pointer" size={30}/>
 </a>
 <a href="https://www.instagram.com/rikkejkristiansen"> 
 <FaInstagram className="cursor-pointer" size={30}/>
 </a>
 <a href="https://github.com/RikkeKristiansen98"> 
 <FontAwesomeIcon icon={faGithubSquare} style={{ fontSize: "30px" }}/>
</a>

</div>
        </div>
    )
}