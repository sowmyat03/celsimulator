import React,{useState}from 'react'

function NewCheck({grid,nextGen}) {
    
    const [initial, setInitial] =useState(false);

    let clsnme="";
    const handleChange=(x,y)=>{

        if(grid[x][y]===1){
          grid[x][y]=0
        }else{
          grid[x][y]=1
        }
    
      setInitial(!initial);

    }
    return (<>
        {initial ? <div className="node">
             {grid.map((row,rowId)=>{
                return (
                    <div key={rowId}>
                        {row.map((col,colId)=>{
                                  if(grid[rowId][colId]===1){
                                    clsnme="grid alive"
                                  }else{ clsnme="grid"}                  
                           return  <div className={clsnme} key={colId} onClick={()=>handleChange(rowId,colId)}></div> }
                             )
                        }
                    </div>)
                    
                })}
        </div> : 
        <div className="node">
             {grid.map((row,rowId)=>{
                return (
                    <div key={rowId}>
                        {row.map((col,colId)=>{
                                  if(grid[rowId][colId]===1){
                                    clsnme="grid alive"
                                  }else{ clsnme="grid"}                  
                           return  <div className={clsnme} key={colId} onClick={()=>handleChange(rowId,colId)}></div> }
                             )
                        }
                    </div>)
                    
                })}
        </div>}
        <div className="primary"><button onClick={()=>{nextGen(grid)}}>NextGen</button></div>
  </>  )
}

export default NewCheck
