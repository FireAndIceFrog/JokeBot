import * as React from "react";

import {Grid,Paper,Typography} from '@material-ui/core';
type ErrorBoxProps = {
  children: any
};

function ErrorBox (props: ErrorBoxProps)
{
  return <Grid item xs={12}>
            <Paper className = "error">
              <Typography variant = "h4" id = "errorHeading">
                Ruh Ro - an error has occurred!
              </Typography>
              <Typography id = "errorBody">
                {props.children}
              </Typography>
            </Paper>
          </Grid>
};

export default ErrorBox;
