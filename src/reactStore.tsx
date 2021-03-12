import React from 'react'
export interface IState 
{
    APIPath: string
}

const state : IState = {
    APIPath: ""
}

const JokeContext = React.createContext([state, (x: IState) => {}]);
export {JokeContext};