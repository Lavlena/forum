import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Users/Login'
import Register from './components/Users/Register';
import Home from './components/Home';
import Answers from './components/Answers/Answers';
import NewQuestion from './components/Questions/NewQuestion'
import NewAnswer from './components/Answers/NewAnswer';
import Footer from './components/Footer';
import { useContext } from 'react';
import UserContext from './context/UserContext';


function App() {
  const {users} = useContext(UserContext);
  return (
    <>
         <Header/>
        
         <hr />
         <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/answers" element={<Answers/>}/>
          <Route path="/newQuestion" element={<NewQuestion/>}/>
          <Route path="/newAnswer" element={<NewAnswer/>}/>
          <Route path="/*" element={<h1>404 Page not Found</h1>} />
         </Routes>
         <hr />
         <Footer/>
    </>
  );
}

export default App;
