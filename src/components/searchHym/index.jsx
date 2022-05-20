import React from 'react';
import { Container, InputContainer } from './styles';
import ResultsSearch from '../resultsSearch';
<<<<<<< HEAD
import { hinos } from '../../mocks/correlacaoDeHinos';
=======
import dataHyms, { hinos } from '../../mocks/correlacaoDeHinos';
>>>>>>> fb7425017f466a76bde492dd3cf15c1920844972
import { useState } from 'react';

export default function () {
    const [hym, setHym] = useState(hinos);
    const [chooseHym, setChooseHym] = useState('');

    return (
        <div>
            <Container>
                <h1>Correlação Hinos CCB</h1>
                <InputContainer>
                    <p>Digite o número do hino abaixo:</p>
                    <input 
                    type="search" 
                    onChange={(e) => setChooseHym(e.target.value)} 
                    maxLength={3}
                    />
                </InputContainer>
                    <ResultsSearch hym={hym} choose={chooseHym}/>
            </Container>
        </div>
    );
}

