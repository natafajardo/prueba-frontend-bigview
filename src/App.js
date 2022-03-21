import "./App.css";
import InsectList from "./components/InsectList/InsectList";
import Toolbar from "./components/Toolbar/Toolbar";
import { useEffect, useState } from "react";
import ModalPost from "./components/ModalPost/ModalPost";
import NewInsect from "./components/NewInsect/NewInsect";


function App() {
  const [insectList, setInsectList] = useState([]);
 
  const fetchClassifications = () => {
    fetch(`/api/Classifications`)
      .then((response) => response.json())
      .then((data) => setInsectList(data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchClassifications();
  }, []);


  

  return (
    <div className="App">
      <Toolbar />
      <NewInsect insectList={insectList}/>
      <ModalPost/>
      <div className="container pt-5">
        <InsectList insectList={insectList}/>
      </div>
    </div>
  );
}

export default App;
