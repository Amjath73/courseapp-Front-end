import logo from './logo.svg';
import './App.css';
import AddCourse from './components/AddCourse';
import ViewAll from './components/ViewAll';
import Search from './components/Search';

function App() {
  return (
    <div>
      <AddCourse/>
      <ViewAll/>
      <Search/>
    </div>
  );
}

export default App;
