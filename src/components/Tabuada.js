import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';

import GameLogic from '../logic/GameLogic';
import GameOver from './GameOver';


const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        width: 100,
        height: 140
    },
    control: {
        padding: theme.spacing.unit * 2
    },
    chalenge: {
        height: 120
    }
});


class Tabuada extends React.Component {
    constructor(props) {
        super(props);
        this.gameLogic = new GameLogic();
        
        this.state = {
            n1:this.gameLogic.n1,
            n2:this.gameLogic.n2,
            result:this.gameLogic.result,
            score:this.gameLogic.score,
            record: this.gameLogic.record
        }
    }

    _getRandom(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    newGame() {
        this.gameLogic.startGame();
        this.setState({
            n1:this.gameLogic.n1,
            n2:this.gameLogic.n2
        },()=>document.getElementById("respostaInput").focus());
    }

    
    answer() {
        if (this.gameLogic.testResult(this.state.result)) {
            this.setState({
                score: this.gameLogic.score,
                n1: this.gameLogic.n1,
                n2:this.gameLogic.n2,
                record: this.gameLogic.record
            },()=> document.getElementById("respostaInput").focus());
            
        }

        this.setState({
            result:''
        });

    }

    renderMainMenu() {
        return (
            <Grid container spacing={16} alignItems="center" justify="center">
                <Button color="secondary" variant="contained" onClick={this.newGame.bind(this)}>Iniciar novo jogo</Button>
            </Grid>
        );
    }

    respostaHandle(e) {
        this.setState({
            result: parseInt(e.target.value,10)
        });
    }

    renderGame() {
        return (
            <Grid container spacing={16} alignItems="center" justify="center">
                <Grid item xs={6} sm={10}>
                        <Paper>
                            <span style={{fontSize:23, padding: 10}}>{this.state.n1}</span>
                                
                            X
                
                            <span style={{fontSize:23, padding: 10}}>{this.state.n2}</span>
                        </Paper>
                </Grid>
                <Grid container alignItems="center" justify="center">
                    <Input 
                        id="respostaInput" 
                        type="number" 
                        style={{width:'50px'}}
                        value={this.state.result} 
                        onChange={this.respostaHandle.bind(this)}/>
                </Grid>
                <Grid>
                    <Button color="primary" variant="contained" onClick={this.answer.bind(this)}>Responder</Button>
                </Grid>
            </Grid>
        );
    }

    render() {
        return (
            <div >
                
                {this.gameLogic.gameOver && <GameOver score={this.gameLogic.score} record={this.gameLogic.record} />}
                {this.gameLogic.gameInProgress && (!this.gameLogic.gameOver) && this.renderGame()}

                {(!this.gameLogic.gameInProgress) && this.renderMainMenu()}
                
                

            </div>

        );
    }
}



export default withStyles(styles)(Tabuada);