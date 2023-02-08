import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Answers from './components/Answers';
import NewQuestion from './components/NewQuestion';
import NewAnswer from './components/NewAnswer';
import Footer from './components/Footer';


function App() {
  return (
    <>
         <Header/>
         <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/" element={<Register/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Answers/>}/>
          <Route path="/" element={<NewQuestion/>}/>
          <Route path="/" element={<NewAnswer/>}/>
          <Route path="/*" element={<h1>404 Page not Found</h1>} />
         </Routes>
         <Footer/>
    </>
  );
}

export default App;
