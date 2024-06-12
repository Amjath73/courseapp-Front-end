import logo from './logo.svg';
import './App.css';
import AddCourse from './components/AddCourse';
import ViewAll from './components/ViewAll';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Delete from './components/Delete';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddCourse/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/view' element={<ViewAll/>}/>
      <Route path='/delete' element={<Delete/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
