import React from 'react';

function CellEvolution({gridNew,nextSeq,resetGrid}) {

    var grid = [[],[],[],[],[],[],[],[],[],[]];
    var gridReset = [[],[],[],[],[],[],[],[],[],[]];

    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
           gridReset[row][col]=0;
       }
       }
   

    
    for (let row = 0; row < 10; row++) {
     for (let col = 0; col < 10; col++) {
        grid[row][col]=gridNew[row][col];
    }
    }
    


    const calculateNeighbours= (gridNew,x,y)=>{
        let neighbours=0;
       const adjCells = [[x,y-1],[x,y+1],[x+1,y-1],[x+1,y+1],[x+1,y],[x-1,y-1],[x-1,y],[x-1,y+1]]
    
       for(let i=0;i<8;i++){
           let x1= adjCells[i][0];
           let y1= adjCells[i][1];
            if (x1>=0 && y1>=0 && x1<10 && y1<10 && gridNew[x1][y1]){
                neighbours++;
            }

       }

        return neighbours;
    }

    for (let row = 0; row < 10; row++) {
       for (let col = 0; col < 10; col++) {
            let neighbours=calculateNeighbours(gridNew,row,col);
            if(gridNew[row][col]){
                if (neighbours < 2 || neighbours > 3){
                    grid[row][col]=0;
                }else if(neighbours === 2 ||neighbours===3){
                    grid[row][col]=1;
                    
                }
            }else{
                if(neighbours===3){
                    grid[row][col]=1;
                  
                }
            }
        }
      
    }
       
    

    return (<>
        <div className="node">
             {grid.map((row,rowId)=>{
                return (
                    <div key={rowId}>
                        {row.map((col,colId)=>{
                                  if(grid[rowId][colId]===1){
                                    var clsnme="grid alive"
                                  }else{  clsnme="grid"}                  
                           return  <div className={clsnme} key={colId} ></div> }
                             )
                        }
                    </div>)
                    
                })}
        </div>
        <div className="primary">
        <button onClick={()=>nextSeq(grid)}>NextGen</button>
        <button onClick={()=>resetGrid(gridReset)}>Reset</button>
        </div>
        
        </>
    )
}
export default CellEvolution
