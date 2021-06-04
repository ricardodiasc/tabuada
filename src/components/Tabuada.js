import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import {LinearProgress} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import GameLogic from "../logic/GameLogic";
import GameOver from "./GameOver";
import Keyboard from "./Keyboard";
import { CircularProgress } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 100,
    height: 140,
  },

  chalenge: {
    height: 120,
  },
});

const gameLogic = new GameLogic();

const Tabuada = () => {
  const [n1, setN1] = useState(gameLogic.n1);
  const [n2, setN2] = useState(gameLogic.n2);
  const [timer, setTimer] = useState(102);
  const [result, setResult] = useState(gameLogic.result);

  useEffect(() => {
    const cronTimer = setInterval(() => {
      setTimer((oldTimer) => {
        if(oldTimer === 0) {
          gameLogic.setGameOver();
          return 135;
        }

        return oldTimer - 1;

      })
    }, 100);

    return () => clearInterval(cronTimer);
  });  

  const newGame = () => {
    gameLogic.startGame();
    setN1(gameLogic.n1);
    setN2(gameLogic.n2);
    setTimer(100);
  };

  const answer = () => {
    if (result !== "" && gameLogic.testResult(result)) {
      //TODO: Change to useTabuadaGameLogic com objeto
      setTimer(oldTimer => {
        return oldTimer + 30;
      })
      setN1(gameLogic.n1);
      setN2(gameLogic.n2);
    }

    setResult("");
  };

  const registerNumber = (e) => {
    let a = parseInt(result + e.target.innerText);
    setResult(a);
  };

  const renderMainMenu = () => {
    return (
      <Grid container alignItems="center" justify="center">
        <Button color="secondary" variant="contained" onClick={newGame}>
          Iniciar novo jogo
        </Button>
      </Grid>
    );
  };

  const renderGame = () => {
    return (
    <>

      <Grid container item xs={12} alignItems="center" justify="center">
        <Grid item xs={10} sm={10}>
          <Paper>
            <span style={{ fontSize: 23, padding: 10 }}>{n1}</span>X
            <span style={{ fontSize: 23, padding: 10 }}>{n2}</span>=
            <span style={{ fontSize: 24, padding: 10 }}>{result}</span>
          </Paper>
        </Grid>
        <Grid item xs={10} sm={10}>
          <Paper style={{height:"1em"}}>
            <LinearProgress  variant="determinate" value={timer}/>
          </Paper>
        </Grid>

        <Grid
          xs={12}
          sm={12}          
          container
          item
          alignItems="center"
          justify="center"
        />
        <Grid
          sm={8}
          lg={12}          
          container
          item
          alignItems="center"
          justify="center"

        >
          <Keyboard onKeyPressed={registerNumber} />
        </Grid>
        
        <Grid container item xs={12} alignItems="center" justify="center">
          
          <Button color="secondary" variant="contained" onClick={answer}>
            Responder
          </Button>
        </Grid>
      </Grid>
    </>
    );
  };

  return (
    <div>
      {gameLogic.gameOver && (
        <GameOver score={gameLogic.score} record={gameLogic.record} />
      )}
      {gameLogic.gameInProgress && !gameLogic.gameOver && renderGame()}

      {!gameLogic.gameInProgress && renderMainMenu()}
    </div>
  );
};

export default withStyles(styles)(Tabuada);
