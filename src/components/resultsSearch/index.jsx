import React from 'react';
import { useState, useEffect } from 'react';
import { Container, InputContainer } from './styles';
import './styles.css'
import api from '../../services/api'

const SearchHymn = () => {
    const [hymns, setHymns] = useState([]);
    const [hymn, setHymn] = useState('');

    let hino = hymn.replace(/\D+/g, '')

    useEffect(() => {
        api.get(`hinos/${hino}`).then((response) => { 

        setHymns(response.data) })

        },[hymns],[hymn])

        if (hino === '0') {
            setHymn('1')
        }
    
    return (
        <div>
            <Container>
                <h1>Correlação Hinos CCB</h1>
                    <InputContainer>
                        <p>Digite o número do hino abaixo:</p>
                        <input 
                        type="text"
                        maxLength={3} 
                        value={hino}
                        onChange={(e) => setHymn(e.target.value)}
                        >   
                        </input>
                    </InputContainer>
                        <table className="container">
                            <tbody>
                                <tr>
                                    <td className='subtitle1'>Correlação</td>
                                    <td className="title">Hinário 5</td>
                                    <td className="title">Hinário 4</td>
                                </tr>
                                <tr>
                                    <td className='subtitle'>Hino</td>
                                    <td className='info'>{hymns.id}</td>
                                    <td className='info'>{hymns.hinario4}</td>
                                </tr>
                                <tr>
                                    <td className='subtitle'>Título</td>
                                    <td className='info'>{hymns.tituloH5}</td>
                                    <td className='info'>{hymns.tituloH4}</td>
                                </tr>
                                <tr>
                                    <td className='subtitle'>Acidentes</td>
                                    <td className='info'>{hymns.acidentesH5}</td>
                                    <td className='info'>{hymns.acidentesH4}</td>
                                </tr>
                                <tr>
                                    <td className='subtitle'>Tonalidade</td>
                                    <td className='info'>{hymns.tonalidadeH5}</td>
                                    <td className='info'>{hymns.tonalidadeH4}</td>
                                </tr>
                                <tr>
                                    <td className='subtitle'>Compasso</td>
                                    <td className='info'>{hymns.compassoH5}</td>
                                    <td className='info'>{hymns.compassoH4}</td>
                                </tr>
                                <tr>
                                    <td className='subtitle'>Autores</td>
                                    <td className='info'>{hymns.autoresH5}</td>
                                    <td className='info'>{hymns.autoresH4}</td>
                                </tr>
                            </tbody>
                        </table>
            </Container>           
        </div>
    )
}
export default SearchHymn;