import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import "./App.css"
import { useDispatch } from 'react-redux';
import {Inc, Dec} from './States/reducers/index'
function App() {
  const curState=useSelector((state)=> state.number);
  const dispatch = useDispatch();
  return (
    <div className="App">
<h3>state management</h3>
<h1>{curState}</h1>
<div>
  <button onClick={()=> dispatch(Inc())}>inc</button>
  <button onClick={()=> dispatch(Dec())}>Dec</button>
</div>
    </div>
  );
}

export default App;
