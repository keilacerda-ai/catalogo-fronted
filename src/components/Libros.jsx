import { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import { Button, TextField } from "@mui/material";

function Libros() {
  const [libros, setLibros] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  const cargarLibros = async () => {
    const res = await api.get("libros/");
    setLibros(res.data);
  };

  const guardarLibro = async () => {
    await api.post("libros/", { titulo, autor });
    cargarLibros();
  };

  const eliminarLibro = async (id) => {
    await api.delete(`libros/${id}/`);
    cargarLibros();
  };

  useEffect(() => {
    cargarLibros();
  }, []);

  return (
    <div>
      <h2>Libros</h2>
      <TextField label="Título" onChange={e => setTitulo(e.target.value)} />
      <TextField label="Autor ID" onChange={e => setAutor(e.target.value)} />
      <Button onClick={guardarLibro}>Guardar</Button>

      {libros.map(l => (
        <div key={l.id}>
          {l.titulo}
          <Button onClick={() => eliminarLibro(l.id)}>Eliminar</Button>
        </div>
      ))}
    </div>
  );
}

export default Libros;
