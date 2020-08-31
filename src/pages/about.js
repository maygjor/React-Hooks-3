import React,{useContext} from 'react';
import { UserContext } from '../UserContext';

export function About(){
    const providerValue= useContext(UserContext);
    return (<div><h2>About {providerValue.value}</h2></div>);
}