import "./App.css";
import NavBar from "./component/Home/NavBar";
import Routes from "./component/Home/Routes";
import { GlobalStyle } from "./styles";
function App() {
  return (
    <div>
      <GlobalStyle />
      <NavBar className="nb" />

      <Routes />
    </div>
  );
}

export default App;
