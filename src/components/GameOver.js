import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

export default (props) => {
    return (
        <>
            <Grid>
                <h1>Game Over</h1>
                <p>Acertos: {props.score}</p>
                <p>Recorde: {props.record}</p>
                <Button>Tela Inicial</Button>
            </Grid>            
        </>
    )
};


