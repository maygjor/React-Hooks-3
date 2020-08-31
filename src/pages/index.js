import React,{useContext} from 'react';
import { UserContext } from '../UserContext';
export function Index(){
    const providerValue= useContext(UserContext);
    return (<div><h2>Index {providerValue.value}</h2></div>);
}