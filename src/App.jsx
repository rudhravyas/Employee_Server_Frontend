import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header/Header";
import Nomatch from "./Pages/Nomatch/Nomatch";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PostEmployee from "./Pages/Employee/PostEmployee";
import UpdateUser from "./Pages/UpdateUser/UpdateUser";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='*' element={<Nomatch />} />
        <Route path='/employee' element={<PostEmployee />} />
        <Route path='/employee/:id' element={<UpdateUser />} />
      </Routes>
    </>
  );
}

export default App;
