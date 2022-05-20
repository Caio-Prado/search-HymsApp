import React from 'react';
import { useState, useEffect } from 'react';
import { Container, InputContainer } from './styles';
import './styles.css'
import api from '../../services/api'

const SearchHymn = () => {
    const [hymns, setHymns] = useState([]);
    const [hymn, setHymn] = useState('');

    useEffect(() => {

        api.get(`hinos/${hymn}`).then((response) => { 
            
        setHymns(response.data) })
    
        },[hymns],[hymn])

    return (
        <div>
            <Container>
                <h1>Correlação Hinos CCB</h1>
                    <InputContainer>
                        <p>Digite o número do hino abaixo:</p>
                        <input 
                        type="search"
                        value={hymn}
                        onChange={(e) => setHymn(e.target.value)}
                        maxLength={3}
                        />
                    </InputContainer>
                        <table className="container">
                            <tbody>
                                <tr>
                                    <td>Correlação</td>
                                    <td className="title">Hinário 5</td>
                                    <td className="title">Hinário 4</td>
                                </tr>
                                <tr>
                                    <td>Hino</td>
                                    <td>{hymns.id}</td>
                                    <td>{hymns.hinario4}</td>
                                </tr>
                                <tr>
                                    <td>Título</td>
                                    <td>{hymns.tituloH5}</td>
                                    <td>{hymns.tituloH4}</td>
                                </tr>
                                <tr>
                                    <td>Acidentes</td>
                                    <td>{hymns.acidentesH5}</td>
                                    <td>{hymns.acidentesH4}</td>
                                </tr>
                            <tr>
                                    <td>Tonalidade</td>
                                    <td>{hymns.tonalidadeH5}</td>
                                    <td>{hymns.tonalidadeH4}</td>
                                </tr>
                            <tr>
                                    <td>Compasso</td>
                                    <td>{hymns.compassoH5}</td>
                                    <td>{hymns.compassoH4}</td>
                                </tr>
                            <tr>
                                    <td>Autores</td>
                                    <td>{hymns.autoresH5}</td>
                                    <td>{hymns.autoresH4}</td>
                                </tr>
                            </tbody>
                        </table>
            </Container>           
        </div>
    )
}
export default SearchHymn;