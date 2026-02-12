import { useState } from "react";
import Login from "./components/Login";
import Autores from "./components/Autores";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <>
      {auth ? <Autores /> : <Login setAuth={setAuth} />}
    </>
  );
}

export default App;


