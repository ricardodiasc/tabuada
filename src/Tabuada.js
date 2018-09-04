import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



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
    }
})


class Tabuada extends React.Component {
    constructor(props) {
        super(props);
        this.respostaInput = null;
        
        this.state = {
            n1:0,
            n2:0,
            resposta:0,
            acertos:0
        }
    }

    _getRandom(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    novoJogo() {
        this.setState({
            n1:this._getRandom(10),
            n2:this._getRandom(10)
        });
    }

    responder() {
        const gabarito = this.state.n1 * this.state.n2;
        console.log(`Resposta ${this.state.resposta} - Gabarito ${gabarito} `);
        if(this.state.resposta === gabarito) {
            alert('Correto');
        } else {
            alert('Errou.');
        }
        
        this.setState({
            resposta:''
        });
        this.respostaInput.focus();
    }

    respostaHandle(e) {
        if(this.respostaInput == null)
            this.respostaInput = e.target;
        
        this.setState({
            resposta: parseInt(e.target.value,10)
        });
    }

    render() {
        return (
            <div >
                <Grid container className={styles.root} spacing={16}>
                    <Grid item xs={12}>
                        <Paper >
                            <FormLabel>{this.state.n1}</FormLabel>    
                            <div>X</div>
                            <FormLabel>{this.state.n2}</FormLabel>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container className={styles.root}>

                 </Grid>
                
                
                
                <div className="container multiplicacao">
                    <label className="">{this.state.n1}</label>
                    X
                    <label>{this.state.n2}</label>
                </div>
                <div className="container">
                    <input focus="true" className="item-resposta" type="number" value={this.state.resposta} onChange={this.respostaHandle.bind(this)} />
                </div>
                <div className="container">
                    <Button color="primary" variant="contained" onClick={this.responder.bind(this)}>Responder</Button>
                </div>

                <div className="container">
                    <Button color="secondary" variant="contained" onClick={this.novoJogo.bind(this)}>Iniciar novo jogo</Button>
                    <Button color="default" variant="contained">Configurações</Button>
                </div>
                
            </div>

        );
    }
}



export default withStyles(styles)(Tabuada);