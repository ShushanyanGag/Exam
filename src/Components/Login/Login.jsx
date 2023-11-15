import logo from "../../icons/logo-login.png";
import "./Login.css";

const Login = () => {
    return (
        <div className="container">
            <div className="left-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="right">
                <p style={{marginBottom: "45px" }}>Interactive Brand</p>
                <h3>Login</h3>
                <p style={{fontSize: "18px", marginBottom: "40px"}}>Welcome Back! Please enter your details.</p>
                <form action="">
                    <input type="email" placeholder="Email" className="input-email" required/>
                    <br />
                    <input type="password" placeholder="Password" className="input-password" required/>
                    <br />
                    <div className="checkbox-text-forgot">
                        <div className="checkbox-text">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Remember me for 30 days</label>
                        </div>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <input type="submit" value="Log in" className="login-button"/>
                    <br />
                    <input type="submit" value="Register" className="register-button"/>
                    <p style={{textAlign: "center", color: "white"}}>or</p>
                    <input type="submit" value="Sign In With Google" className="sign-in-button"/>
                </form>
                <p style={{textAlign: "center", fontSize: "17px", color: "whitesmoke"}}>Dont have an acoount? <span><a href="#" style={{color: "white"}}>Sign up for free</a></span></p>
            </div>
        </div>
    )
};

export default Login;