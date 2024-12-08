import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import { useState ,useContext} from 'react';
import BooksById from './Components/BooksById';
import Books from './Components/Books';
import Home from './Components/Home';
import Login from './Components/Login';
import ContextName from './Components/ContextName'
import React,{Suspense} from 'react';

function App() {

  const [books, setBooks] = useState(
    [{ id: 1, name: "black and white", author: "Ester Ranan" }, { id: 2, name: "everyOne can", author: "Avigail maizlik" }]
  )

  const [name, setName] = useState('')

  return (
    <div className="App">
      
<nav id="navbar">
      
      <span style={{color:"blue"}}>{name}</span>
    
    <Link to='/'>Home</Link>
    <Link to='/Books'>Books</Link>
    <Link to='/login'>login</Link>
  
</nav>
<ContextName.Provider value={setName}>
<Routes>
  <Route path='/Books' element={<Books books={books}/>}></Route>
  <Route path='/Books/:id' element={<BooksById books={books}/>}></Route>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
</Routes>

</ContextName.Provider>

    </div>
  );
}

export default App;
