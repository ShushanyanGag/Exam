import "./FirstPage.css";
import Background from "../../icons/bg-main-page.png";

const FirstPage = () => {
    return (
        <div className="main">
            <div className="heading">
                <h1>
                    <b>
                        WELCOME TO NG-NOTES!
                    </b>
                </h1>
                <h4 style={{fontSize: "18px", marginTop: "30px"}}>
                        You're notes will never disappear from here because
                </h4>
                <h4 style={{marginTop: "10px"}}>
                    <b>
                        YO'URE NOTES ARE OUR RESPONSIBILITY.
                    </b>
                </h4>
                <a href="/notes">
                    <button>
                        Write your first note here!
                    </button>
                </a>
            </div>
            <div className="down_desription">
                <a href="https://www.instagram.com/shushanyan_gag/" target="_blank">
                    Created by Gag Shushanyan
                </a>
                <a href="https://www.instagram.com/harutyunyan5475/" target="_blank">
                    Designed by Narek Harutyunyan
                </a>
            </div>
        </div>
    )
};

export default FirstPage;