import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import AddJob from "./Pages/AddJob";
import  { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
    <Navbar/>
   <Toaster/>
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/add-job" element={<AddJob/>}/>

        </Routes>
    </>

  );
}

export default App;
