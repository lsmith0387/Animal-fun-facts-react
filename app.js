import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const background = <img className =  'background' alt = 'ocean' src = '/images/ocean.jpg'/>
const showBackground = true;

const title = '';

const displayFact = e => {
const selectedAnimal = e.target.alt;
const animalInfo = animals[selectedAnimal];
const index = Math.floor(Math.random() * animalInfo.facts.length);
const funFact= animalInfo.facts[index];
document.getElementById('fact').innerHTML = funFact;
};

const images = []
for (const animal in animals){
  images.push(<img
    key= {animal}
    className= 'animal'
    alt= {animal}
    src= {animals[animal].image}
    aria-label= {animal}
    role= 'button'
    onClick = {displayFact}
  />)
};

const animalFacts = (
  <div>
    <h1>{title || 'Click an animal for a fun fact'}</h1>
    {showBackground && background}
    <div className = 'animals'>{images}</div>
    <p id='fact'></p>
  </div>
);

ReactDOM.render(
	animalFacts, 
	document.getElementById("root")
);