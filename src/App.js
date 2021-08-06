import './App.css';
import React,{useEffect, useState} from 'react';
import CellEvolution from './components/CellEvolution';
import NewCheck from './components/NewCheck';

function App() {
  
  const [nxtgen,setNxtGen]=useState(false);
  
  const [grid,setGrid]=useState([]);

  useEffect(() => {
    
     for(let row = 0; row < 10; row++) {
        const currentRow = [];
        for (let col = 0; col < 10; col++) {
          currentRow.push(0);
            }
           grid.push(currentRow);  
          }
       setGrid([...grid]);
  },[])// eslint-disable-line react-hooks/exhaustive-deps
       
         const nextGen =(grid)=>{
           setNxtGen(true);
          
         }
         const nextSeq=(grid)=>{
           setGrid(grid);
          
         }
        const resetGrid=(grid)=>{
          setGrid(grid);
          setNxtGen(false);
         
        }
        

  return (<>{grid? (nxtgen? <CellEvolution gridNew={grid} nextSeq={nextSeq} resetGrid={resetGrid}/> :
    <NewCheck grid={grid} nextGen={nextGen}/>) : '' }
            
            
            
  </> );
}

export default App;
