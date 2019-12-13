import React from 'react';



const Acertou = (
    <div>Voce Acertou!</div>
);

export default Score = (props)=> (
    <div>
        <span style={{color:red}}>
            Acertos:{props.score}
        </span>
    </div>
);