import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import AddToList from './components/AddToList';

export interface Istate{
  people: {
      name:string
      url:string
      age:number
      note?:string 
  }[]
}

function App() {
  const [people, setPeople]=useState<Istate["people"]>([{
      name:"lebron",
      url:"https://www.nba.com/bulls/sites/bulls/files/210707_samsmith_patrickwilliams_warmupdunk_nicepic_16x9.jpg",
      age:24
  },{
    name:"jano",
    url:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f8494218e4a2df00402dd0f%2F2020-NBA-Finals---Game-Six%2F960x0.jpg%3Ffit%3Dscale",
    age:343,
    note:"som jano dzony"
}
])
  return (
    <div className="App">
      <h1>People to my party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
