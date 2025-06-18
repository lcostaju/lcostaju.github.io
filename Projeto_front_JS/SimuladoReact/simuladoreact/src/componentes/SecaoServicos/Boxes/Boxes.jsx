import style from './Box.module.css'


function Boxes() {

    const boxes = [
        {
            texto: "ELEIÇÕES DO CONSELHO SUPERIOR",
            imagem: "/img/iconEleicao.png"
        },
        { texto: "ESTUDE NO IFTM",
            imagem: "/img/iconEstudante.png"
         },
        { texto: "EDITAIS",
            imagem: '/img/iconEdital.png'
        }
    ]

    function showBoxes() {
        return (
            <>
                {boxes.map(box => <div>
                    <img src={box.imagem} />
                    <p>{box.texto}</p>
                    </div>)}
            </>
        );
    }
    return (
        <div className={style.containerServicos}>
            {showBoxes()}
        </div>
    );
}

export default Boxes;