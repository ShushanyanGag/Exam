import "./ContactUs.css";
import Logo from "../../icons/n-logo.png";
import Insta from "../../icons/instagram.svg";
import Github from "../../icons/github.svg";
import Discord from "../../icons/discord.svg";
// import Background from "../../icons/bg_contact.png";

const ContactUs = () => {
    return (
        <div className="section_bg">
            <div className="contact_window">
                <div className="left_logo">
                    <img src={ Logo } alt="Logo" />
                </div>
                <div className="right_contact">
                    <h1>CONTACT US</h1>
                    <div className="form_description">
                        <form className="form">
                            <input type="text" placeholder="Full Name" className="inputs"/> 
                            <br />
                            <input type="email" placeholder="E-mail" className="inputs"/>
                            <br />
                            <input type="text" placeholder="Message" className="inputs"/>
                            <br />
                            <input type="button" value="Contact Us" className="button_contact_us"/>
                        </form>
                        <div className="description">
                            <h3 style={{marginTop: "7px"}}>
                                Contact
                            </h3>
                            <p>shushanyangagik@gmail.com</p>
                            <p>mrnarek222@gmail.com</p>
                            <h3 style={{marginTop: "25px"}}>
                                Based in
                            </h3>
                            <p>
                                Armenia, <br />
                                Vanadzor, VTC  
                            </p>
                            <ul className="contact-icon">
                                    <li>
                                        <a href="https://www.instagram.com" target="_blank" className="instagram">
                                            <img src={ Insta } alt="Instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://discord.com/" target="_blank" className="discord">
                                            <img src={ Discord } alt="Discord" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com" target="_blank" className="github">
                                            <img src={ Github } alt="Github" />
                                        </a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>

    )
};

export default ContactUs;