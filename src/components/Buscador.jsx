const Buscador = ({ onChange, search }) => {

    return (
        <>
            <form class="d-flex" role="search">
                <input
                    class="form-control mb-4"
                    type="search"
                    placeholder="Buscar a un colaborador"
                    aria-label="Search" 
                    value={search}
                    onChange={onChange}
                    />
            </form>
        </>
    )
}

export default Buscador


