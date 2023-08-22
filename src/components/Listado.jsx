const Listado = ({ listadoColaboradores }) => {

    return (
        <>

        <div class="table-responsive">
        <table class="table table-hover table-striped table-responsive">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                        <th>Telefono</th>
                    </tr>
                </thead>


                <tbody >
                    {listadoColaboradores.map(cc => (
                        <tr key={cc.id}>
                            <td>{cc.nombre}</td>
                            <td>{cc.correo}</td>
                            <td>{cc.edad}</td>
                            <td>{cc.cargo}</td>
                            <td>{cc.telefono}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Listado