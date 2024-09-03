import { ChatEngine } from "react-chat-engine";

import "./App.css";
import  ChatFeed  from "./components/ChatFeed";
import LoginForm from "./components/LoginForm"

const App = () => {
  if(!localStorage.getItem('username')) return(
    <LoginForm />
  )
  return (
    <ChatEngine
      height="100vh"
      projectID="
27f43bda-659c-4e1d-855e-833da22181d6"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
