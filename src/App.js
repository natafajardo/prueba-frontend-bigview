import "./App.css";
import InsectList from "./components/InsectList/InsectList";
import Toolbar from "./components/Toolbar/Toolbar";
import { useEffect, useState } from "react";
import ModalPost from "./components/ModalPost/ModalPost";



function App() {
  const [insectList, setInsectList] = useState([]);
  const [showPostModal, setShowPostModal] = useState(false);
 
  const fetchClassifications = () => {
    fetch(`/api/Classifications`)
      .then((response) => response.json())
      .then((data) => setInsectList(data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchClassifications();
  }, []);

 const showCreateModal = () => {
   console.log("hola");
   setShowPostModal(true);
 }
 const hideModal = () => {
   setShowPostModal(false);
 }
  

  return (
    <div className="App">
      <Toolbar showCreateModal={showCreateModal}/>
      <ModalPost showModal={showPostModal} hideModal={hideModal}/>
      <div className="container pt-5">
        <InsectList insectList={insectList}/>
      </div>
    </div>
  );
}

export default App;
