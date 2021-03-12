import  React, {useContext, useEffect,useState} from "react";
import {JokeAPI} from './JokeTypes'
import ErrorBox from './ErrorBox'
import LoadingBox from './LoadingBox'
import JokeBox from './JokeBox'
import {JokeContext} from '../reactStore'

class APIException extends Error{}

async function loadJoke (URI : string, reload: any, callback: any)  {
    try{
        if(reload)
        {
            const response = await fetch(URI)
            if(response.status === 200 || response.status === 202)
            {
                let jokeData : JokeAPI = await response.json();
                return callback(jokeData, "")
            }
            throw new APIException("Failed to get an OK from the server")
        }
    }
    catch (error: any) 
    {
        return callback({}, error.stack)
    }
}

function JokeData () : JSX.Element
{   

    const [contextState,] = useContext(JokeContext);
    const [state, setState] = useState({loading: true, data: {}, error: "", reload: true})
    if(typeof(contextState) == "function")
    {
        throw new TypeError("Context state is a function") 
    }
    useEffect(()=>{
        if(state.loading)
        {
            loadJoke(contextState.APIPath, state.reload, (jokeData: JokeAPI, error: string)=>setState({...state, loading: false, data: jokeData, reload: false, error: error}))
        }
    }, [state, contextState.APIPath])
    
    if(state.loading)
    {
        return <LoadingBox/>
    } 
    else if (Object.entries(state.data).length > 0 )
    {
        return <JokeBox jokeData = {state.data} reload = {()=> {setState({...state, reload: true, loading: true})}}/>
    } 
    else
    {
        return <ErrorBox> {state.error? state.error : {}} </ErrorBox>
    }
    
};

export default JokeData;

