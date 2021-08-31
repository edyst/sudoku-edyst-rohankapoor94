window.onload = () => {
  var grid = [
    [0, 6, 0, 0, 0, 0, 3, 8, 0],
    [1, 0, 5, 0, 0, 0, 4, 0, 2],
    [3, 0, 4, 0, 0, 0, 0, 1, 0],
    [5, 0, 1, 6, 0, 2, 9, 4, 0],
    [0, 0, 9, 8, 3, 0, 2, 7, 5],
    [8, 2, 0, 0, 0, 0, 0, 0, 1],
    [2, 0, 0, 3, 0, 0, 7, 5, 0],
    [0, 0, 0, 2, 0, 0, 1, 0, 9],
    [4, 9, 6, 1, 0, 7, 0, 2, 0],
  ];

  let a = document.querySelectorAll("input");
  console.log(a);

  a.forEach(function (item) {
    // console.log(grid);
    var x, y;
    item.onmouseover = function () {
      item.classList.add("hovers");
    };
    item.onmouseleave = function () {
      item.classList.remove("hovers");
    };
    x = item.getAttribute("id").substring(0, 1);
    y = item.getAttribute("id").substring(1);
    item.onfocus = function () {
      changeSelected(x, y, "#e2ebf3");
      changeRed(item.value, false); 
      item.style.backgroundColor = "#bbdefb";

      // changeRed(x, y, item.value);
    };
    item.onblur = function () {
      grid[x][y] = parseInt(item.value);
      // item.style.backgroundColor = "#fff"; 
      console.log(grid);
      changeRed(item.value, true); 
      re();
      //   item.style.backgroundColor = "white";
      changeSelected(x, y, "white");
    };
    item.oninput = function () {
      changeRed(item.value, false); 
      //   item.style.backgroundColor = "white";
      // changeRed(x, y, item.value);
    };
    item.onchange = () => {
      // console.log("object");
      // item.classList.add("bgwhite");
      // changeSelected(x, y, "white");
    };
    console.log(x, y);
  });

  gridFiling = (grid) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        var id = i + "" + j;

        document.getElementById(id).value = "";
        document.getElementById(id).style.backgroundColor = "#fff";
        document.getElementById(id).removeAttribute("disabled", "disabled");
        document.getElementById(id).classList.remove("dis");
        if (grid[i][j] != 0) {
          // console.log(id);
          document.getElementById(id).value = grid[i][j];
          // document.getElementById(id).set
          document.getElementById(id).setAttribute("disabled", "disabled");
        document.getElementById(id).style.backgroundColor = "#ebebe4";
          // document.getElementById(id).style.backgroundColor = "#4586d4";
          document.getElementById(id).classList.add("dis");
          // document.getElementById(id).addClass('dis');
        }
      }
    }
  };
  gridFiling(grid);
  easyGrid = () => {
    grid = [
      [0, 6, 0, 0, 0, 0, 3, 8, 0],
      [1, 0, 5, 0, 0, 0, 4, 0, 2],
      [3, 0, 4, 0, 0, 0, 0, 1, 0],
      [5, 0, 1, 6, 0, 2, 9, 4, 0],
      [0, 0, 9, 8, 3, 0, 2, 7, 5],
      [8, 2, 0, 0, 0, 0, 0, 0, 1],
      [2, 0, 0, 3, 0, 0, 7, 5, 0],
      [0, 0, 0, 2, 0, 0, 1, 0, 9],
      [4, 9, 6, 1, 0, 7, 0, 2, 0],
    ];

    // console.log(grid);
    gridFiling(grid);
  };
  mediumGrid = () => {
    grid = [
      [0, 0, 0, 4, 0, 6, 0, 0, 2],
      [8, 0, 0, 0, 5, 3, 1, 9, 0],
      [9, 0, 6, 0, 0, 8, 0, 0, 0],
      [6, 7, 0, 1, 8, 0, 0, 0, 9],
      [1, 0, 0, 0, 0, 0, 3, 7, 0],
      [0, 0, 8, 0, 0, 0, 5, 0, 0],
      [0, 8, 0, 0, 4, 0, 2, 5, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 4],
      [4, 0, 9, 0, 0, 0, 6, 1, 0],
    ];

    // console.log(grid);

    gridFiling(grid);
  };
  hardGrid = () => {
    grid = [
      [2, 3, 0, 5, 0, 0, 4, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 3],
      [0, 0, 7, 0, 6, 0, 0, 1, 0],
      [0, 8, 0, 0, 0, 6, 0, 3, 1],
      [3, 1, 0, 4, 0, 5, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0],
      [8, 0, 0, 0, 0, 4, 0, 6, 0],
      [9, 2, 4, 6, 0, 0, 0, 0, 0],
      [1, 0, 5, 0, 9, 8, 0, 0, 0],
    ];

    gridFiling(grid);
  };

  changeSelected = (x, y, color) => {
    for (let i = 0; i < 9; i++) {
      let id = x + "" + i;
      if (
        document.getElementById(id).classList.contains("dis") &&
        color == "white"
      ) {
        document.getElementById(id).style.backgroundColor = "#ebebe4";
      } else {
        document.getElementById(id).style.backgroundColor = color;
      }
    }
    for (let i = 0; i < 9; i++) {
      let id = i + "" + y;
      if (
        document.getElementById(id).classList.contains("dis") &&
        color == "white"
      ) {
        document.getElementById(id).style.backgroundColor = "#ebebe4";
      } else {
        document.getElementById(id).style.backgroundColor = color;
      }
    }
    let xlength = 8;
    let startxLength = 6;
    let ylength = 8;
    let startyLength = 6;
    if (x >= 0 && x <= 2) {
      xlength = 2;
      startxLength = 0;
    } else if (x > 2 && x <= 5) {
      xlength = 5;
      startxLength = 3;
    }
    if (y >= 0 && y <= 2) {
      ylength = 2;
      startyLength = 0;
    } else if (y > 2 && y <= 5) {
      ylength = 5;
      startyLength = 3;
    }
    for (let i = startxLength; i <= xlength; i++) {
      for (let j = startyLength; j <= ylength; j++) {
        const id = i + "" + j;
        if (
          document.getElementById(id).classList.contains("dis") &&
          color == "white"
        ) {
          document.getElementById(id).style.backgroundColor = "#ebebe4";
        } else {
          document.getElementById(id).style.backgroundColor = color;
        }
      }
    }
  };
  re=()=>{
    for (let i = 0; i < 9; i++) {
      // const element = array[i];
      for (let j = 0; j < 9; j++) {
        // const element = array[j];
        if(!document.getElementById(i + "" + j).classList.contains("dis")){
          document.getElementById(i + "" + j).style.backgroundColor = "#fff";
        }
      }
    }

  }
  changeRed = (value, white) => {
    for (let i = 0; i < 9; i++) {
      // const element = array[i];
      for (let j = 0; j < 9; j++) {
        // const element = array[j];
        if (
          document.getElementById(i + "" + j).classList.contains("dis") &&
          white == true
        ) {
          document.getElementById(i + "" + j).style.backgroundColor = "#ebebe4";
        } else if (
          document.getElementById(i + "" + j).value == value &&
          value != 0
        ) {
          document.getElementById(i + "" + j).style.backgroundColor = "#bbdefb";
        }
        
        // else if(!document.getElementById(i + "" + j).classList.contains("dis")){
        //   document.getElementById(i + "" + j).style.backgroundColor = "#fff";
        // }
      }
    }
    // for (let i = 0; i < 9; i++) {
    //   if (i == y) {
    //     continue;
    //   }
    //   let id = x + "" + i;

    //   if (document.getElementById(id).value == value && value != 0) {
    //     console.log(document.getElementById(id).value);
    //     let d = x + "" + y;
    //     // document.getElementById(id).classList.add("redbg");
    //     document.getElementById(d).classList.add("redbg") ;
    //   }
    // }
    // for (let i = 0; i < 9; i++) {
    //   if (i == x) {
    //     continue;
    //   }
    //   let id = i + "" + y;
    //   if (document.getElementById(id).value == value && value != 0) {
    //     let d = x + "" + y;
    //     // document.getElementById(id).classList.add("redbg");
    //     document.getElementById(d).classList.add("redbg") ;
    //   }
    // }
    // let xlength = 8;
    // let startxLength = 6;
    // let ylength = 8;
    // let startyLength = 6;
    // if (x >= 0 && x <= 2) {
    //   xlength = 2;
    //   startxLength = 0;
    // } else if (x > 2 && x <= 5) {
    //   xlength = 5;
    //   startxLength = 3;
    // }
    // if (y >= 0 && y <= 2) {
    //   ylength = 2;
    //   startyLength = 0;
    // } else if (y > 2 && y <= 5) {
    //   ylength = 5;
    //   startyLength = 3;
    // }
    // for (let i = startxLength; i <= xlength; i++) {
    //   for (let j = startyLength; j <= ylength; j++) {
    //     const id = i + "" + j;
    //     if (i == x && y == j) {
    //       continue;
    //     }
    //     if (document.getElementById(id).value == value && value != 0) {
    //       let d = x + "" + y;
    //       // document.getElementById(id).classList.add("redbg");
    //     document.getElementById(d).classList.add("redbg") ;
    //     }
    //   }
    // }
  };

  // v = () => {
  //   if (JSON.stringify(grid) == JSON.stringify(ans)) {
  //     alert("Solved Successfully!");
  //   } else {
  //     alert("Try Harder !");
  //   }
  // };
  let validates1 = (x) => {
    var sumrow = 0;
    var sumcol = 0;
    var set1 = new Set();
    var set2 = new Set();
    for (let i = 0; i < 9; i++) {
      set1.add(grid[x][i]);
      sumrow += grid[x][i];
    }
    if (set1.size != 9 || sumrow != 45) {
      return false;
    }
    for (let i = 0; i < 9; i++) {
      set2.add(grid[i][x]);
      sumcol += grid[i][x];
    }
    if (set2.size != 9 || sumcol != 45) {
      return false;
    }

    return true;
  };
  let validates2 = (x, y) => {
    var sumbox = 0;
    var set3 = new Set();
    let xlength = 8;
    let startxLength = 6;
    let ylength = 8;
    let startyLength = 6;
    if (x >= 0 && x <= 2) {
      xlength = 2;
      startxLength = 0;
    } else if (x > 2 && x <= 5) {
      xlength = 5;
      startxLength = 3;
    }
    if (y >= 0 && y <= 2) {
      ylength = 2;
      startyLength = 0;
    } else if (y > 2 && y <= 5) {
      ylength = 5;
      startyLength = 3;
    }
    for (let i = startxLength; i <= xlength; i++) {
      for (let j = startyLength; j <= ylength; j++) {
        // let d = x + "" + y;
        set3.add(grid[i][j]);
        // console.log(grid[i][j]);
        sumbox += grid[i][j];
      }
    }
    // console.log(set3);
    if (set3.size != 9 || sumbox != 45) {
      return false;
    }
    return true;
  };
  validater = () => {
    var v1 = [];
    var v2 = [];
    for (let i = 0; i < 9; i++) {
      let c = validates1(i);
      v1.push(c);
      console.log(c);
    }
    for (let i = 0; i < 9; i = i + 3) {
      for (let j = 0; j < 9; j = j + 3) {
        let v = validates2(i, j);
        v2.push(v);
        console.log(v);
      }
    }
    // console.log(v1);
    // console.log(v2);
    var z = true;
    for (let i = 0; i < 9; i++) {
      if (v1[i] != v2[i] || v1[i] != true || v2[i] != true) {
        z = false;
        break;
      }
    }
    if (z == true) {
      alert("Congrulations You Solved it Correctly !🎉🎉");
    } else {
      alert("Have u made a mistake ?❌");
    }
  };
};

// let validates = (x, y) => {
//   var sumrow = 0;
//   var sumcol = 0;
//   var sumbox = 0;
//   var set1 = new Set();
//   var set2 = new Set();
//   var set3 = new Set();
//   for (let i = 0; i < 9; i++) {
//     set1.add(grid[x][i]);
//     sumrow += grid[x][i];
//   }
//   if (set1.size != 9 || sumrow != 45) {
//     return false;
//   }
//   for (let i = 0; i < 9; i++) {
//     set2.add(grid[i][y]);
//     sumcol += grid[i][y];
//   }
//   if (set2.size != 9 || sumcol != 45) {
//     return false;
//   }
//   let xlength = 8;
//   let startxLength = 6;
//   let ylength = 8;
//   let startyLength = 6;
//   if (x >= 0 && x <= 2) {
//     xlength = 2;
//     startxLength = 0;
//   } else if (x > 2 && x <= 5) {
//     xlength = 5;
//     startxLength = 3;
//   }
//   if (y >= 0 && y <= 2) {
//     ylength = 2;
//     startyLength = 0;
//   } else if (y > 2 && y <= 5) {
//     ylength = 5;
//     startyLength = 3;
//   }
//   for (let i = startxLength; i <= xlength; i++) {
//     for (let j = startyLength; j <= ylength; j++) {
//       // let d = x + "" + y;
//       set3.add(grid[i][j]);
//       console.log(grid[i][j]);
//       sumbox += grid[i][j];
//     }
//   }
//   if (set3.size != 9 || sumbox != 45) {
//     return false;
//   }
//   // console.log("Size",set1);
//   // console.log("Size",set2);
//   // console.log("Size",set3);
//   // console.log(sumrow);
//   // console.log(sumcol);
//   // console.log(sumbox);
//   return true;
// };
