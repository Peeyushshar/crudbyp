
import './App.css';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Navbar from './components/Navbar';
// import CodeForInterview from './components/CodeforInterview';
import AllUsers from './components/AllUsers';
import {BrowserRouter, Routes, Route} from 'react-router-dom';





function App() {
  return (
   <BrowserRouter>
      <Navbar/>
      <Routes>
     {/* <Route path='/' element={<CodeForInterview/>}/>  */}
     <Route path='/' element={<AllUsers/>}/>
     <Route path='/add' element={<AddUser/>}/>
     <Route path='/edit/:id' element={<EditUser/>}/>
     {/* <Route path='/mail/:id' element={<sendMail/>}/> */}
     </Routes>
    </BrowserRouter>
  );
}

export default App;

