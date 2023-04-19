import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Notification from "./components/Notification";
import PrivateRoutes from "./components/PrivateRoutes";

const Router = ()=>{

    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route element={<PrivateRoutes/>}>
            <Route path="/home" element={<Home/>} />
            <Route path="/notification" element={<Notification/>} />  
            </Route>          
        </Routes>
    );
};




export default Router;
