import React from 'react';
import dataHyms from '../../mocks/correlacaoHinosCCB.json';

import './styles.css'

const resultsSearch = (props) => {

    return (
        <div>
            <table className="container">
                <tbody>
                    <tr>
                        <td>Correlação</td>
                        <td className="title">Hinário 5</td>
                        <td className="title">Hinário 4</td>
                    </tr>
                    <tr>
                        <td>Hino</td>
                        <td>{props.hym}</td>
                        <td>{dataHyms.hinos[0].hinario4}</td>
                    </tr>
                    <tr>
                        <td>Título</td>
                        <td>{dataHyms.hinos[0].tituloH5}</td>
                        <td>{dataHyms.hinos[0].tituloH4}</td>
                    </tr>
                    <tr>
                        <td>Acidentes</td>
                        <td>{dataHyms.hinos[0].acidentesH5}</td>
                        <td>{dataHyms.hinos[0].acidentesH4}</td>
                    </tr>
                <tr>
                        <td>Tonalidade</td>
                        <td>{dataHyms.hinos[0].tonalidadeH5}</td>
                        <td>{dataHyms.hinos[0].tonalidadeH4}</td>
                    </tr>
                <tr>
                        <td>Compasso</td>
                        <td>{dataHyms.hinos[0].compassoH5}</td>
                        <td>{dataHyms.hinos[0].compassoH4}</td>
                    </tr>
                <tr>
                        <td>Autores</td>
                        <td>{dataHyms.hinos[0].autoresH5}</td>
                        <td>{dataHyms.hinos[0].autoresH4}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default resultsSearch;