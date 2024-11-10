// import Body from "./component/Body"; 
import Nav from "./component/Nav";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div>
        <Nav/>
        <Outlet/>
    </div>
  );
}
export default App;
