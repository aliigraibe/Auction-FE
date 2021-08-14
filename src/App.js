import { useSelector } from "react-redux";
import "./App.css";
import NavBar from "./component/Home/NavBar";
import Routes from "./component/Home/Routes";
import { GlobalStyle } from "./styles";
function App() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />

      <Routes />
    </div>
  );
}

export default App;
