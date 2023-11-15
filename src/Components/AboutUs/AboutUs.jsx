import "./AboutUs.css";
import Insta from "../../icons/instagram.svg";
import Github from "../../icons/github.svg";
import Discord from "../../icons/discord.svg";
import Gag from "../../icons/Gag.jpg";
import Narek from "../../icons/Narek.jpg";

const AboutUs = () => {
    return (
        <section className="section-white">
            <div className="container">
                <div className="row">
                    <div className="text-center">
                        <h1 className="section-title">
                            The Team Behind This Project
                        </h1>
                    </div>
                    <div className="members">
                        <div className="team-item">
                            <img src={ Gag } alt="img1" className="team-img"/>
                            <h3>GAG SHUSHANYAN</h3>
                            <div className="team-info">
                                <p>Developer Of The Page</p>
                                <p style={{fontSize: "13px"}}>Enthusiastic and dedicated 16-year-old web developer with a passion for coding and a solid foundation in HTML, 
                                    CSS, JavaScript and React. 
                                </p>

                                <ul className="team-icon">
                                    <li>
                                        <a href="https://www.instagram.com/shushanyan_gag/" target="_blank" className="instagram">
                                            <img src={ Insta } alt="Instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://discord.com/" target="_blank" className="discord">
                                            <img src={ Discord } alt="Discord" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/ShushanyanGag" target="_blank" className="github">
                                            <img src={ Github } alt="Github" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="team-item">
                            <img src={ Narek } alt="img1" className="team-img"/>
                            <h3>NAREK HARUTYUNYAN</h3>
                            <div className="team-info">
                                <p>Designer Of  The Page</p>
                                <p style={{fontSize: "13px"}}>Enthusiastic and dedicated 17-year-old web designer with a passion for designing a beautiful site in HTML, 
                                    CSS, JavaScript and React. </p>

                                <ul className="team-icon">
                                    <li>
                                        <a href="https://www.instagram.com/harutyunyan5475/" className="instagram" target="_blank">
                                            <img src={ Insta } alt="Instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://discord.com/" className="discord" target="_blank">
                                            <img src={ Discord } alt="Discord" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/HN11112" className="github" target="_blank">
                                            <img src={ Github } alt="Github" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutUs;