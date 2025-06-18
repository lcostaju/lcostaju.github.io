import React from 'react';
import Apresentacao from '../Apresentacao';
import style from './Servico.module.css';
import Boxes from '../SecaoServicos/Boxes/Boxes';

function Servicos() {
    return (
        <section className={style.secaoServico}>
            <Apresentacao titulo="Serviço e informações" paragrafo="Selecione o assunto desejado"/>
            <Boxes/>
        </section>
    );
}

export default Servicos;