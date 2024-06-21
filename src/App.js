import MenuComponent from "./components/MenuComponents/MenuComponent";
import HomeComponent from "./components/HomeComponents/HomeComponent";
import TaskComponent from "./components/TaskComponents/TaskComponent"
import "./App.css";
function App(){
  return (
    <div className="page">
      <MenuComponent/>
      <HomeComponent/>
      <TaskComponent/> 
      
     </div> 

  );
}
export default App;