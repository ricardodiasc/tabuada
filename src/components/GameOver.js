import React from 'react';
import Grid from '@material-ui/core/Grid';

export default  (props) => {
    return (
    <Grid>
        <h1>Game Over</h1>
        <p>Acertos: {props.score}</p>
        <p>Recorde: {props.record}</p>
    </Grid>
)};


