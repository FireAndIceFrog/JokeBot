import * as React from "react";
import {JokeAPI} from './JokeTypes';
import Fade from '@material-ui/core/Fade';
import AddIcon from '@material-ui/icons/Add';
import {Grid,Paper, Typography, Button } from '@material-ui/core';
type JokeBoxProps = {
  jokeData : JokeAPI,
  reload: any
};



function JokeBox (props : JokeBoxProps)
{
  const [fade, setFate] = React.useState(false);
  setTimeout(()=> setFate(true), 800);
  return <Grid item xs={12}>
              <Paper>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography id = "setup">
                    {props.jokeData.setup}
                  </Typography>
                  <Fade in = {fade}>
                    <Typography id = "punchline">
                      {props.jokeData.punchline}
                    </Typography>
                  </Fade>
                </Grid>
                <Grid item xs={12}>
                  <Button  variant="contained" color="secondary" onClick = {props.reload} id = "addButton">
                      <AddIcon />
                      Get me a new joke!
                  </Button >
                </Grid> 

                </Grid>
              </Paper>
            </Grid>
};

export default JokeBox;
