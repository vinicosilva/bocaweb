export const Search = ({busca, buscaODA}) =>{
    return(
        <div className="busca">
            <input id="search" name="busca" type="text" value={busca} placeholder="Pesquise aqui!" onChange={buscaODA}/>
        </div>
    )
}