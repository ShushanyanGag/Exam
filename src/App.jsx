import React, { createContext, useState } from "react";
import ToDo from "./Components/ToDo";
import SingleTask from "./Components/singleTask/SingleTask";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Components/Login/Login";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import FirstPage from "./Components/FirstPage/FirstPage";

export const ContextProvider = createContext();

const App = () => {
  const types = ["success", "info", "warning", "error"];
  const addNotification = (text, type) => {
    toast(text, { type });
  };
  const [num, setNum] = useState(5);
  const [loadin, setLoading] = useState(5);
  const contextValue = {
    num,
    setNum,
    loadin,
    setLoading,
    addNotification,
  };
  const navigate = useNavigate();
  const containerStyles = { width: "100%", margin: "0" };
  return (
    <>
      <Navbar />
      <div style={containerStyles}>
        <ContextProvider.Provider value={contextValue}>
          <Routes>
            <Route path="/" Component={ FirstPage }/>
            <Route
              path="/"
              element={<ToDo addNotification={addNotification} />}
            />
            <Route path="/singleTask/:id" element={<SingleTask />} />
            <Route onClick={() => navigate("/", { state: { a: 5 } })}/>

            <Route path="/notes" Component={ ToDo }/> 
            <Route path="/login" Component={ Login }/>
            <Route path="/about" Component={ AboutUs }/>
            <Route path="/contact" Component={ ContactUs }/>
          </Routes>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </ContextProvider.Provider>
      </div>
    </>
  );
};

export default App;
