import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./styles.module.css";
const Filter = ({ tasks, setTasks }) => {
  const [searchData, setSearchData] = useState();
  const filterByTitle = () => {
    console.log(searchData, "searchData");
    const filteredTasks = tasks.filter((task) => task.title === searchData);
    console.log(filteredTasks, "filteredTasks");
    setTasks(filteredTasks);
  };
  return (
    <div style={{ display: "flex", marginTop: "25px", justifyContent: "center"}}>
      <Form.Control
        placeholder="search for notes"
        onChange={(e) => setSearchData(e.target.value)}
        className="search_place"
        style={{width: "30%", borderRadius: "10px 0 0 10px"}}
      />
      <Button style={{ marginLeft: "15px", backgroundColor: "black", color: "white", borderRadius: "0 10px 10px 0", border: "none", margin: "0" }} onClick={filterByTitle}>
        Search
      </Button>
      
    </div>
  );
};

export default Filter;
