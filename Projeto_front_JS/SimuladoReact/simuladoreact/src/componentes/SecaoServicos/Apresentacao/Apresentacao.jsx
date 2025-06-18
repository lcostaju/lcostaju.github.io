
import style from './Apresentacao.module.css';
function Apresentacao() {

    return (
        <div className={style.apresentacao}>
            <h2>{titulo}</h2>
            <p>{paragrafo}</p>
        </div>
    )

}

export default Apresentacao; 