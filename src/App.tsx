import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Signup } from './pages/signup';
import { Home } from './pages/home';
import { Navbar } from './components/Navbar/Navbar';
import About from './pages/About';
import Store from './pages/Store';
function App() {

  function shuffleArray<T>(array:T[]):T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const Originalhouses = ["Stark","Targareyn", "Baratheon","Lannister","Marteyl"];
  const Originalpeople = ["John","Danerys" ," Joffrey","Jaime","Oberyn"];

  const combinedPairs = Originalpeople.map((person, index) => {
    return { [person]: Originalhouses[index] };
  });

  const shuffledHouses = shuffleArray([...Originalhouses]);
  const shuffledPeople = shuffleArray([...Originalpeople]);


  return (
    <Home 
    peoples={shuffledPeople} 
    houses={shuffledHouses} 
    combinedPairs={combinedPairs}
    originalPeople={Originalpeople}
    originalHouses={Originalhouses}
    />
  );
}

export default App;
