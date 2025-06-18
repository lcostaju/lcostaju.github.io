import { useEffect, useState } from "react";


function Contador() {

    const [cont1,setCont1] = useState(0);
    const [cont2,setCont2] = useState(0);

    useEffect(()=>{
        console.log(Math.random())
    },[cont1]);

    /*
    Carrega só quando o componente e carregado
    useEffect(()=>{
        console.log(Math.random())
    });
    */


    return (
        <>
            <form action="">
                <input type="button" value="Incrementar +1" onClick={()=>setCont1(cont1+1)} />
                <input type="button" value="Incrementar +2" onClick={() => setCont2(cont2+2)}/>
            </form>
            <p>Contador 1: {cont1}</p>
            <p>Contador 2: {cont2}</p>
        </>
    );
}

export default Contador;