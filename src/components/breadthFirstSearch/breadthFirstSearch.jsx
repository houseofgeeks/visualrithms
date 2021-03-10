import React, { useState, useEffect } from "react";

const BreadthFirstSearch = () => {
  const [arrDetails, updateArrDetails] = useState({
    arr: [],
    rows: 10,
    cols: 10,
    start:[],
    end:[],
    sel:0,
	elemColor: [],
	keyFound: false
  });

  const animations = [];
  const pathcolor  = [];
  const mapped     = [];

  useEffect(() => {
    generateArr();
  }, []);

	const generateArr = () => {
        const rows = 20;
        const cols = 20;
        const arr =  Array(rows).fill(0).map(row => Array(cols).fill(0));
        const elemColor = Array(rows).fill(0).map(row => Array(cols).fill(("#1b1")));
        const keyFound = false;
        const start=[];
        const sel=0;
        const end=[];
    updateArrDetails({ arr, rows ,cols ,start, end ,sel, elemColor, keyFound });
	}


  const block = (arr) =>{
    var aray=arrDetails.arr;
    var elc = arrDetails.elemColor;

    if(aray[arr[0]][arr[1]]===0){
      aray[arr[0]][arr[1]]=-1;
      elc[arr[0]][arr[1]]="#000000";
    }
    else if( aray[arr[0]][arr[1]]===-1){
      aray[arr[0]][arr[1]] = 0;
      elc[arr[0]][arr[1]]="#1b1";
    }
    updateArrDetails({
      arr: aray,
      rows: arrDetails.rows,
      cols: arrDetails.cols,
      start:arrDetails.start,
      end:arrDetails.end,
      sel:arrDetails.sel,
    elemColor: elc,
    keyFound: arrDetails.keyFound});
  }

  const beg = (arr) => {
    
    var s=1;
    var st = [];
    var array =  arrDetails.arr;
    var elemColor1 = arrDetails.elemColor;
  if(array[arr[0]][arr[1]] === 0){
    array[arr[0]][arr[1]] = 11;
    elemColor1[arr[0]][arr[1]] = "#d10";
    st = arr;
    s=1;
  }
      updateArrDetails({
        arr: array,
        rows: arrDetails.rows,
        cols: arrDetails.cols,
        start:st,
        end:arrDetails.end,
        sel:s,
      elemColor: arrDetails.elemColor,
      keyFound: arrDetails.keyFound});
  }

  const end = (arr) => {
    
    var s=1;
    var se=[];
    var array =  arrDetails.arr;
    var elemColor1 = arrDetails.elemColor;
  if(array[arr[0]][arr[1]] === 0){
    array[arr[0]][arr[1]] = 10;
    elemColor1[arr[0]][arr[1]] = "#d10";
    s=2;
    se=arr;
  }
      updateArrDetails({arr: array,
        rows: arrDetails.rows,
        cols: arrDetails.cols,
        start:arrDetails.start,
        end:se,
        sel:s,
      elemColor: arrDetails.elemColor,
      keyFound: arrDetails.keyFound});
  }

  const search = () => {

    var array = arrDetails.arr;
    var elc = arrDetails.elemColor;
    
    var queue = [];
    queue.push(arrDetails.start);
    while(queue.length>0){
      var el = queue[0];
      var kf=false;
      if(el[0]>0){
          if(el[0]-1 ===  arrDetails.end[0]   && el[1] ===  arrDetails.end[1]){
            mapped.push([queue[0],[el[0]-1,el[1]]]);
            kf=true;
            break;
          }
          else{
            if(array[el[0]-1][el[1]]===0 ){
              queue.push([el[0]-1,el[1]]);
              mapped.push([queue[0],[el[0]-1,el[1]]]);
              array[el[0]-1][el[1]] = 1;
              elc[el[0]-1][el[1]] = "white";
              animations.push(JSON.stringify(elc));
          }
              else if(array[el[0]-1][el[1]]===10  ){
                queue.push([el[0]-1,el[1]]);
                kf=true;
                mapped.push([queue[0],[el[0]-1,el[1]]]);

            }
          }
        }
          if(el[0]<19){
            if(el[0]+1 === arrDetails.end[0]  &&  el[1] === arrDetails.end[1]){
              mapped.push([queue[0],[el[0]+1,el[1]]]);
              kf=true;
              break;
            }
            else{
              if(array[el[0]+1][el[1]] ===0 ){
              queue.push([el[0]+1,el[1]]);
              mapped.push([queue[0],[el[0]+1,el[1]]]);
              array[el[0]+1][el[1]] = 1;
              elc[el[0]+1][el[1]] = "white";
              animations.push(JSON.stringify(elc));
            }
            else if(array[el[0]+1][el[1]] ===10 ){
              kf=true;
              queue.push([el[0]+1,el[1]]);
              mapped.push([queue[0],[el[0]+1,el[1]]]);


            }
          }
        }
          if(el[1]<19){
            if(el[0]===arrDetails.end[0] && el[1]+1=== arrDetails.end[1]){
              mapped.push([queue[0],[el[0],el[1]+1]]);
              kf=true;
              break;
            }
            else{
              if(array[el[0]][el[1]+1]===0 ){
              queue.push([el[0],el[1]+1]);
              mapped.push([queue[0],[el[0],el[1]+1]]);
              array[el[0]][el[1]+1]=1;
              elc[el[0]][el[1]+1] = "white";
              animations.push(JSON.stringify(elc));}
              else if(array[el[0]][el[1]+1]===10){
                kf=true;
                mapped.push([queue[0],[el[0],el[1]+1]]);
                queue.push([el[0],el[1]+1]);
              }
            }
          }
          if(el[1]>0){
            if(el[0]===arrDetails.end[0] && el[1]-1 === arrDetails.end[1]){
              mapped.push([queue[0],[el[0],el[1]-1]]);
              kf=true;
              break;
            }
            else{
              if(array[el[0]][el[1]-1]===0 ){
              queue.push([el[0],el[1]-1]);
              mapped.push([queue[0],[el[0],el[1]-1]]);
              array[el[0]][el[1]-1]=1;
              elc[el[0]][el[1]-1] = "white";
              animations.push(JSON.stringify(elc));}
              else if(array[el[0]][el[1]-1]===10){
                queue.push([el[0],el[1]-1]);
                kf=true;
                mapped.push([queue[0],[el[0],el[1]-1]]);

              }
            }
          }
          queue.shift();
        }   
    updateArrDetails({arr: arrDetails.arr,
      rows: arrDetails.rows,
      cols: arrDetails.cols,
      start:arrDetails.start,
      end:arrDetails.end,
      sel:arrDetails.sel,
      elemColor: elc,
      keyFound: kf});
      return kf;
  };

  const pathfind = () =>{
    var pelc = arrDetails.elemColor;
        var pth = arrDetails.end;
        while(true){
          for(var i=0;i<mapped.length;i++){
            if(mapped[i][1][0]===pth[0] && mapped[i][1][1]===pth[1]){
              pth = mapped[i][0];
              pelc[pth[0]][pth[1]] = "red";
              pathcolor.push(JSON.stringify(pelc));
            }
          }
          if(pth === arrDetails.start){
            break;
          }
        }
  }

  const animepath = () => {
    for (let i = 0; i < pathcolor.length; ++i) {
      setTimeout(() => {
        var pathcolors = JSON.parse(pathcolor[i]);
        updateArrDetails({
          arr: arrDetails.arr,
					rows: arrDetails.rows,
          cols: arrDetails.cols,
          start:arrDetails.start,
          end:arrDetails.end,
          sel:arrDetails.sel,
          elemColor: [...pathcolors],
					keyFound: arrDetails.keyFound,
				});
        updateArrDetails({arr: arrDetails.arr,
          rows: arrDetails.rows,
          cols: arrDetails.cols,
          start:arrDetails.start,
          end:arrDetails.end,
          sel:arrDetails.sel,
          elemColor: [...pathcolors],
        keyFound: arrDetails.keyFound});
			}, i );
    }

  }

  const animate = () => {
    var found = search();
    if(found){
      pathfind();
    }
      setTimeout(animepath,animations.length );    
      for (let i = 0; i < animations.length; ++i) {
        setTimeout(() => {
          let animation = JSON.parse(animations[i]);
          updateArrDetails({
            arr: arrDetails.arr,
            rows: arrDetails.rows,
            cols: arrDetails.cols,
            start:arrDetails.start,
            end:arrDetails.end,
            sel:arrDetails.sel,
            elemColor: [...animation],
            keyFound: arrDetails.keyFound
          });
          updateArrDetails({arr: arrDetails.arr,
            rows: arrDetails.rows,
            cols: arrDetails.cols,
            start:arrDetails.start,
            end:arrDetails.end,
            sel:arrDetails.sel,
            elemColor: [...animation],
          keyFound: arrDetails.keyFound});
        }, i );
        
      }
  };

  return (
      <>
      <h1 style={{ color: "white", textAlign: "center", margin: "1rem" }}>
      Breadth First Search
    </h1><center>
      <div style={{ color: "white", textAlign: "center", margin: "1rem" }}>
      Click on 2 boxes to select starting and ending positions<br/>
      Then hover over boxes to create obstacles<br/>
      </div>
      <div
        style={{
          display: "flex",
          direction: "row",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          maxWidth: "950px",
        }}
      >
        {arrDetails.arr.map((elem, idx) => {
          return (
            <div
              key={idx}
            >
              {elem.map((element, idex) => {
          return (
            <div
              style={{
                backgroundColor: arrDetails.elemColor[idx][idex],
                padding: "1px",
                //color: "FF0000",
                width: "30px",
                height: "25px",
                margin: "5px",
                color: arrDetails.elemColor[idx][idex],
              }}
              key={[idx,idex]} id={[idx,idex]}
              onClick = {() => {
                if(arrDetails.sel===0){
                beg([idx,idex]);
                }
                else if (arrDetails.sel===1){
                  end([idx,idex]);
                }
              }}

              onMouseOutCapture = {() =>{
                if(arrDetails.sel===2){
                block([idx,idex]);
                }
              }}
            >
             
            </div>
          );
        })}
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
              animate();
              
        }}
        style={{
          margin: "10px",
          padding: "15px",
          backgroundColor: "#1b1b",
          fontSize: "1.5em",
          color: "white",
					border: "none",
					borderRadius: "1em"
        }}
      >
        Search {arrDetails.key}
      </button>
			<button
        onClick={() => {
          generateArr();
        }}
        style={{
          margin: "10px",
          padding: "15px",
          backgroundColor: "#0001b1",
          fontSize: "1.5em",
          color: "white",
					border: "none",
					borderRadius: "1em"
        }}
      >
        Reset
      </button>
    </center></>
  );
};

export default BreadthFirstSearch;
