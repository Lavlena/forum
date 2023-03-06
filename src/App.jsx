import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Users/Login'
import Register from './components/Users/Register';
import Home from './components/Home';
import Answers from './components/Answers/Answers'
import NewQuestion from './components/Questions/NewQuestion';
import EditQuestion from './components/Questions/EditQuestion';
import NewAnswer from './components/Answers/NewAnswer';
import EditAnswer from './components/Answers/EditAnswer';
import Footer from './components/Footer';
import { useContext } from 'react';
import UserContext from './context/UserContext';
import { useEffect } from 'react';



function App() {
//  const navigate = useNavigate();
//  useEffect(() => {
//   navigate('/home');
//  },[])
  
  return (
    <>
         <Header/>
        <main>
        <hr />
         <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/answers/:questionid" element={<Answers/>}/>
          <Route path="/newQuestion" element={<NewQuestion/>}/>
          <Route path="/editQuestion/:questionid" element={<EditQuestion/>}/>
          <Route path="/newAnswer/:questionid" element={<NewAnswer/>}/>
          <Route path="/editAnswer/:answerid" element={<EditAnswer/>}/>
          
          <Route path="/*" element={<h1>404 Page not Found</h1>} />
         </Routes>
         <hr />
        </main>
        
         <Footer/>
    </>
  );
}

export default App;
