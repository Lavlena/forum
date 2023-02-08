import './App.css';
import { Routes, Route } from 'react-router-dom';

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
