import React from 'react';
import { Container, InputContainer } from './styles';
import ResultsSearch from '../resultsSearch';
import { useState, useEffect } from 'react';
import dataHyms from '../../mocks/correlacaoHinosCCB.json';

export default function () {
    const [hym, setHym] = useState('');

    return (
        <div>
            <Container>
                <h1>Correlação Hinos CCB</h1>
                <InputContainer>
                    <p>Digite o número do hino abaixo:</p>
                    <input 
                    type="search" 
                    value={hym}
                    onChange={(e) => setHym(e.target.value)} 
                    maxLength={3}
                    />
                </InputContainer>
                    <ResultsSearch hym={hym}/>
            </Container>
        </div>
    );
}

