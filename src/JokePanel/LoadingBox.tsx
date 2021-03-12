import * as React from "react";
import ReactLoading from "react-loading";
import {Grid,Paper} from '@material-ui/core';
import "bootstrap/dist/css/bootstrap.css";

function LoadingBox ()
{
  return <Grid item xs={12}>
            <Paper className = "loading">
              <ReactLoading type={"bars"} color={"black"} />
            </Paper>
          </Grid>
};

export default LoadingBox;
