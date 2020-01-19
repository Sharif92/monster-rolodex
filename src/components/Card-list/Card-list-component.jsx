import React from 'react';
import { Card } from '../card/card-component.jsx';
import './card-list-Style.css';
export const CardList  = props => { 
    return <div className='card-list'>
        {props.monsters.map (monsters=>
        ( <Card key={monsters.id} monsters={monsters} /> ))} </div>;
};