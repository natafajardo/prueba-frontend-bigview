
import './App.css';
import InsectList from './components/InsectList/InsectList';
import Toolbar from './components/Toolbar/Toolbar';


function App() {
  return (
    <div className="App">
      <Toolbar/>
      <div className="container pt-5">
        <InsectList/>
      </div>
      
    </div>
  );
}

export default App;
