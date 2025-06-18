function Ilustracao({imagem,texto}) {
    return ( 
        <div>
            <img src={imagem} />
            <p>{texto}</p>
        </div>
    );
}

export default Ilustracao;