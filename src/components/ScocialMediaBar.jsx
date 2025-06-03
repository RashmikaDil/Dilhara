import { faConnectdevelop, faGithub, faInstagram, faLinkedin, faMailchimp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaBar = () => {
return (
    <>
    
    <div className="flex justify-center items-center text-2xl p-2 gap-4 mt-4">
        <a href="https://github.com/RashmikaDil/" target="_blank" rel="noopener noreferrer">
       <FontAwesomeIcon className="cursor-pointer" icon={faGithub}/>
       </a>

       <a href="https://www.linkedin.com/in/rashmika-dilhara-47a7102aa/" target="_blank" rel="noopener noreferrer">
       <FontAwesomeIcon className="cursor-pointer" icon={faLinkedin}/>
       </a>

       <a href="https://www.instagram.com/rashmikadil523/" target="_blank" rel="noopener noreferrer">
       <FontAwesomeIcon className="cursor-pointer" icon={faInstagram}/>
       </a>
       
         </div>
         <div className="flex justify-center items-center text-2xl p-2 gap-4 mt-4">
         
         </div>

    
    </>
)
}

export default SocialMediaBar;