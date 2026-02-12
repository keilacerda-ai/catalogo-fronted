import { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import { Button, TextField } from "@mui/material";

function Autores() {
  const [autores, setAutores] = useState([]);
  const [nombre, setNombre] = useState("");

  const cargarAutores = async () => {
    const res = await api.get("autores/");
    setAutores(res.data);
  };

  const guardarAutor = async () => {
    await api.post("autores/", { nombre });
    setNombre("");
    cargarAutores();
  };

  const eliminarAutor = async (id) => {
    await api.delete(`autores/${id}/`);
    cargarAutores();
  };

  useEffect(() => {
    cargarAutores();
  }, []);

  return (
    <div>
      <h2>Autores</h2>
      <TextField label="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
      <Button onClick={guardarAutor}>Guardar</Button>

      {autores.map(a => (
        <div key={a.id}>
          {a.nombre}
          <Button onClick={() => eliminarAutor(a.id)}>Eliminar</Button>
        </div>
      ))}
    </div>
  );
}

export default Autores;
