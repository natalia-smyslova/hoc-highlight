import React, { useState } from 'react';
import List from './components/List';
import data from './data/Data';

export default function App() {
  const [list, setList] = useState(data);

  return (
    <List list={list} />
  );
}