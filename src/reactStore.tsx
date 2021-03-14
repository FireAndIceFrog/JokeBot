import React from 'react'
export interface IState 
{
    APIPath: string
}

const state : IState = {
    APIPath: "localhost"
}

const JokeContext = React.createContext([state, (x: IState) => {}]);
export {JokeContext};