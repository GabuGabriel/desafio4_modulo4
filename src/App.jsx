import { BaseColaboradores } from './components/colaboradores';
import Buscador from './components/Buscador';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Alert from './components/Alert';
import { useState } from 'react'
import './App.css'

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [search, setSearch] = useState("")
  const [alert, setAlert] = useState({ msg: "", color: "" });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filtroColaboradores = colaboradores.filter((cc) => {
    if (
      cc.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      cc.correo.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      cc.edad.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      cc.cargo.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      cc.telefono.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return true;
    }
    return false;
  });

  const handleSubmit = (agregarColaborador) => {
    const agregarId = {
      ...agregarColaborador,
      id: colaboradores.length + 1,
    }
    setColaboradores([...colaboradores, agregarId]);
  };

  return (
    <>
      <div className="container1">
        <div className="container2">
          <h1>Lista de colaboradores</h1>
          <Buscador onChange={handleChange} search={search} />
          <Listado listadoColaboradores={filtroColaboradores} />
        </div>

        <div className="container3">
          <Formulario onSubmit={handleSubmit} setAlert={setAlert} />
          {alert.msg && <Alert msg={alert.msg} color={alert.color} />}
        </div>
      </div>

    </>
  )
}

export default App
