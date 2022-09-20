export const ListODAS = ({odas}) =>{


    return(
        
        <div className='post flex'>
        <p> {odas.length} ODAs Publicadas </p>
        {odas.map(oda => (
          <div className="post-content " key={oda._id}>
            <h1>{oda.nome}</h1>
            <h3>usuario: {oda.usuario}</h3>
            <p>{oda.descricao}</p>
            
            </div>
        ))}
      </div>
    )
}
