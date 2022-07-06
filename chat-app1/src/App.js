//components
import Login from "./components/login/Login";
import Chats from "./components/chat/Chats";
//dependency
import {Switch,Route} from "react-router-dom";
//context
import AuthContextProvider from "./context/AuthContextProvider";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Switch>
          <Route path="/chat" component={Chats} />
          <Route path="/" component={Login} />

        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
