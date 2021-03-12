import React, {useState} from 'react';
import './App.css';
import JokePanel from './JokePanel'
import {IState, JokeContext} from './reactStore'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
const OriginState : IState = 
{
    APIPath: "https://official-joke-api.appspot.com/jokes/random"
}

function App() {
  const [state, setState] = useState(OriginState);
  return (
    <div className="App">
      <JokeContext.Provider value = {[state, (x:IState)=>setState(x)]}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper >
              <Typography variant="h3" id = "header">
                Your Go to Joke Simulator
              </Typography>
            </Paper>
          </Grid>
          <JokePanel/>
        </Grid>
        <Grid container spacing={3} style = {{position: "fixed", bottom: "0px", left : "0px"}}>
          <Grid item xs={12}>
            <Paper >
              Copyright of DadJokesRUs
            </Paper>
          </Grid>
        </Grid>
        
      </JokeContext.Provider>
    </div>
  );
}

export default App;
