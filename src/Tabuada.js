import React from 'react';





class Tabuada extends React.Component {
    constructor(props) {
        super(props);
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
        console.log();
        this.setState({
            n1:this._getRandom(10),
            n2:this._getRandom(10)
        });
    }

    responder() {
        const gabarito = this.state.n1 * this.state.n2;
        console.log(`Resposta ${this.state.resposta} - Gabarito ${gabarito} `);
        if(this.state.resposta === gabarito) {
            alert('Correto')
        } else {
            alert('Errou.')
        }
    }

    respostaHandle(e) {
        this.setState({
            resposta: e.target.value
        });
    }

    render() {
        return (
            <div style={{}}>
                <label style={{width:'20%'}}>{this.state.n1}</label>
                X
                <label>{this.state.n2}</label>
                <input type="text" value={this.state.resposta} onChange={this.respostaHandle.bind(this)} />
                <button onClick={this.responder.bind(this)}>Responder</button>

                <div>
                    <button onClick={this.novoJogo.bind(this)}>Iniciar novo jogo</button>
                    <button>Configurações</button>
                </div>
            </div>

        );
    }
}



export default Tabuada;