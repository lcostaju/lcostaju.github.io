import style from './QuemSomos.module.css'


function QuemSomos({titulo,caminhoImg,texto}){
return(
    <section className={style.quemSomos}>
        <h2>{titulo}</h2>
        <div>
            
            <div>
                <img src={caminhoImg}  />
            </div>
            <div>
                <p>{texto}</p>
            </div>
        </div>
    </section>
)
}

export default QuemSomos;