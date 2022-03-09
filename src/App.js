import LoginForm from "./loginPage";
import { Route, Routes, } from "react-router-dom";
import Profile from "./Component/Profile/profile";
import Notes from "./Component/Notes/notes";
import Home from "./Component/Home/home";
const App = () =>{
 return (
     <>
    
     <Routes>
         <Route path="/notes" element={<Notes />}></Route>
         <Route path="/" element={<LoginForm />}></Route>
         <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/profile' element={<Profile></Profile> }></Route>
     </Routes>
     </>
 );
}

export default App;