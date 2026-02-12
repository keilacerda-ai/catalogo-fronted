import { useState } from "react";
import Login from "./components/Login";
import Autores from "./components/Autores";

function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem("token"));

  const logout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };

  return (
    <>
      {auth ? (
        <>
          <button onClick={logout}>Cerrar sesión</button>
          <Autores />
        </>
      ) : (
        <Login setAuth={setAuth} />
      )}
    </>
  );
}

export default App;
