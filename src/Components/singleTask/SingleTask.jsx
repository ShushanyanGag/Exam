import Styles from "./styles.module.css";
import { useLocation, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const SingleTask = () => {
  const { state } = useLocation();
  const location = useLocation();
  console.log(location, "location");
  return (
    <div style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div className={Styles.container}>
      <p>Title: {state.title}</p>
      <p>Description: {state.description} </p>
      {/* <p>Date: {state.date} </p> */}
      <Link to="/notes">
        <Button style={{backgroundColor: "white", color: "black", borderRadius: "30px", border: "none", fontSize: "18px", marginTop: "20px"}}>
          <b>Return</b>
        </Button>
      </Link>
    </div>
    </div>
    
  );
};

export default SingleTask;
