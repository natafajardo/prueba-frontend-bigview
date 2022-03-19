import "./App.css";
import InsectList from "./components/InsectList/InsectList";
import Toolbar from "./components/Toolbar/Toolbar";
import { useEffect, useState } from "react";
import ModalPost from "./components/ModalPost/ModalPost";


function App() {
  const [insectList, setInsectList] = useState([]);
  const url = "https://insectsapi.azurewebsites.net";
  const fetchClassifications = () => {
    fetch(`${url}/api/Classifications`)
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
      <ModalPost/>
      <div className="container pt-5">
        <InsectList insectList={insectList}/>
      </div>
    </div>
  );
}

export default App;
