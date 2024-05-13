import "./App.css";
import Login from "./google-OAuth/login";
import Logout from "./google-OAuth/logout";

function App() {
  return (
    <div className="App">
      <h1>Google Auth</h1>
      <div className="center">
        <Login />
      </div>
      <div className="center" button>
        <Logout />
      </div>
    </div>
  );
}

export default App;
