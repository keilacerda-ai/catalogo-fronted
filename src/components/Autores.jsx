import { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import { Button, TextField } from "@mui/material";

function Autores() {
  const [autores, setAutores] = useState([]);
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    obtenerAutores();
  }, []);

  const obtenerAutores = async () => {
    const res = await api.get("autores/");
    setAutores(res.data);
  };

  const crearAutor = async () => {
    await api.post("autores/", { nombre });
    setNombre("");
    obtenerAutores();
  };

  const eliminarAutor = async (id) => {
    await api.delete(`autores/${id}/`);
    obtenerAutores();
  };

  return (
    <div>
      <h2>Autores</h2>

      <TextField
        label="Nuevo Autor"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <Button onClick={crearAutor} variant="contained">
        Crear
      </Button>

      <ul>
        {autores.map((autor) => (
          <li key={autor.id}>
            {autor.nombre}
            <Button onClick={() => eliminarAutor(autor.id)}>
              Eliminar
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Autores;
