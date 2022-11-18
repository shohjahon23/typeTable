import React from 'react';
import './App.css';
import Table from './components/Table';

interface Cat {
  name: string;
  age: number;
  gender: string;
  color: string;
  activityLevel?: string; // optional, same as string | undefined
  favoriteFood?: string; // optional, same as string | undefined
}

type ColumnDefinitionType<T, K extends keyof T> = {
  key: K;
  header: string;
  width?: number;
}

const data: Cat[] = [
  {
    name: "Mittens",
    color: "black",
    age: 2,
    gender: "female",
    activityLevel: "hight",
    favoriteFood: "milk",
  },
  {
    name: "Mons",
    color: "grey",
    age: 2,
    gender: "male",
    favoriteFood: "old socks",
    activityLevel: "medium",
  },
  {
    name: "Luna",
    color: "black",
    age: 2,
    gender: "female",
    activityLevel: "medium",
    favoriteFood: "fish",
  },
  {
    name: "Bella",
    color: "grey",
    age: 1,
    gender: "female",
    activityLevel: "high",
    favoriteFood: "mice",
  },
  {
    name: "Oliver",
    color: "orange",
    age: 1,
    gender: "male",
    activityLevel: "low",
    favoriteFood: "fish",
  },
];

const columns: ColumnDefinitionType<Cat, keyof Cat>[] = [
  {
    key: 'name',
    header: 'Name',
    width: 150
  },
  {
    key: 'age',
    header: 'Age in years',
  },
  {
    key: 'color',
    header: 'Color'
  }
]

function App() {
  return (
    <div className="App">
      <Table data={data} columns={columns} />
    </div>
  );
}

export default App;
