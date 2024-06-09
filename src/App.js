import logo from './logo.svg';
import './App.css';
import AddBook from './component/AddBook';
import SearchBook from './component/SearchBook';
import DeleteBook from './component/DeleteBook';
import ViewBook from './component/ViewBook';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<AddBook/>}/>
      <Route path='/search' element={<SearchBook/>}/>
      <Route path='/delete' element={<DeleteBook/>}/>
      <Route path='/view' element={<ViewBook/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
