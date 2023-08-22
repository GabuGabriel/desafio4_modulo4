import { useState } from "react";

const Formulario = ({ onSubmit, setAlert }) => {
    const [colaborador, setColaborador] = useState({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
    });

    const handleChange = (e) => {
        setColaborador({
            ...colaborador,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        if (
            colaborador.nombre === "" ||
            colaborador.correo === "" ||
            colaborador.edad === "" ||
            colaborador.cargo === "" ||
            colaborador.telefono === ""
        ) {
            setAlert({
                msg: "Completa todos los campos",
                color: "danger"
            })
            return;
        }
        setAlert({
            msg: "Colaborador agregado exitosamente",
            color: "success"
        });

        onSubmit(colaborador)
        setColaborador({
            nombre: "",
            correo: "",
            edad: "",
            cargo: "",
            telefono: "",
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <input
                        class="form-control"
                        type="text"
                        id="inputNombre"
                        placeholder="Nombre"
                        onChange={handleChange}
                        name="nombre"
                        value={colaborador.nombre} />
                </div>
                <div class="mb-3">
                    <input
                        class="form-control"
                        type="email"
                        id="inputCorreo"
                        placeholder="Correo"
                        onChange={handleChange}
                        name="correo"
                        value={colaborador.correo} />
                </div>
                <div class="mb-3">
                    <input
                        class="form-control"
                        type="text"
                        id="inputEdad"
                        placeholder="Edad"
                        onChange={handleChange}
                        name="edad"
                        value={colaborador.edad} />
                </div>
                <div class="mb-3">
                    <input
                        class="form-control"
                        type="text"
                        id="inputCargo"
                        placeholder="Cargo"
                        onChange={handleChange}
                        name="cargo"
                        value={colaborador.cargo} />
                </div>
                <div class="mb-3">
                    <input
                        class="form-control"
                        type="text"
                        id="inputTelefono"
                        placeholder="Telefono"
                        onChange={handleChange}
                        name="telefono"
                        value={colaborador.telefono} />
                </div>
                <button type="submit" class="btn btn-primary">
                    Agregar colaborador
                </button>
            </form>
        </>
    )
};

export default Formulario