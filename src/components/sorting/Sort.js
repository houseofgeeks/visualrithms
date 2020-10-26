import React, { Component } from "react";

class Sort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [],
      idxes: [],
      disabled: false,
      start: false,
      cur: -1,
      next: -1,
      upto: -1,
      size: 100,
      width: 3,
    };
    this.handleClick = this.handleClick.bind(this);
    this.animate = this.animate.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
    this.mergeSort = this.mergeSort.bind(this);
    this.mergeSortUtil = this.mergeSortUtil.bind(this);
    this.quickSort = this.quickSort.bind(this);
    this.quickSortUtil = this.quickSortUtil.bind(this);
    this.pratitioning = this.pratitioning.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.shuffle();
  }

  handleClick(e) {
    this.setState({ disabled: true });

    if(e.target.name === "bubble"){
      this.bubbleSort();
    }else if(e.target.name === "merge"){
      this.mergeSort();
    }else if(e.target.name === "quick"){
      this.quickSort();
    }else if(e.target.name === "shuffle"){
      this.shuffle();
      this.setState({ disabled: false });
    }
    
  }

  handleChange(e){
    e.preventDefault();
    let size = e.target.value;
    this.setState({size: size}, () => {
      this.shuffle();
    });
  }

  shuffle(){
    let size = this.state.size,
      tempArr = [], tempIdxes = [];
    for (let i = 0; i < size; ++i){
      tempArr.push((Math.floor(Math.random() * 10000) % 500) + 5);
      tempIdxes.push(0);
    }
    this.setState({ idxes: tempIdxes, arr: tempArr, upto: size, disabled: false });
    return;
  }

  pratitioning(arr, l, r, animations, state) {
    let piv_idx = l;
    state.cur = l;
    state.next = l - 1;
    animations.push(JSON.stringify(state));
    for (let i = l; i < r; ++i) {
      if (arr[i] <= arr[r]) {
        let temp = arr[i];
        arr[i] = arr[piv_idx];
        arr[piv_idx] = temp;
        ++piv_idx;
        state.cur = i;
        state.next = piv_idx;
        state.arr = arr;
        animations.push(JSON.stringify(state));
      } else {
        state.cur = i;
        state.next = piv_idx;
        state.arr = arr;
        animations.push(JSON.stringify(state));
      }
    }
    let temp = arr[r];
    arr[r] = arr[piv_idx];
    arr[piv_idx] = temp;
    state.cur = r;
    state.next = piv_idx;
    state.arr = arr;
    state.idxes[piv_idx] = 1;
    animations.push(JSON.stringify(state));
    return piv_idx;
  }

  quickSortUtil(arr, l, r, animations, state) {
    if (l >= r) return;
    let pivot = this.pratitioning(arr, l, r, animations, state);
    this.quickSortUtil(arr, l, pivot - 1, animations, state);
    this.quickSortUtil(arr, pivot + 1, r, animations, state);
  }

  quickSort() {
    this.setState({ start: true });
    let newArr = [];
    let animations = [];
    let idxes = [];
    for (let i = 0; i < this.state.size; ++i) {
      newArr[i] = this.state.arr[i];
      idxes.push(0);
    }
    var newState = {
      arr: newArr,
      idxes: idxes,
      cur: -1,
      next: -1,
      upto: newArr.length,
      size: newArr.length,
    };
    this.quickSortUtil(newArr, 0, newArr.length - 1, animations, newState);
    console.log(newArr);
    this.animate(animations);
  }

  mergeSortUtil(arr, l, r, animations, newState) {
    if (l === r) {
      return;
    }
    // console.log(newState);
    this.mergeSortUtil(arr, l, parseInt((l + r) / 2), animations, newState);
    this.mergeSortUtil(arr, parseInt((l + r) / 2) + 1, r, animations, newState);
    let i = l,
      j = parseInt((l + r) / 2) + 1,
      newArr = [];
    newState.cur = i;
    newState.next = j;
    animations.push(JSON.stringify(newState));
    while (i <= parseInt((l + r) / 2) && j <= r) {
      if (arr[i] > arr[j]) {
        newArr.push(arr[j]);
        ++j;
      } else {
        newArr.push(arr[i]);
        ++i;
      }
      newState.cur = i;
      newState.next = j;
      animations.push(JSON.stringify(newState));
    }
    while (i <= parseInt((l + r) / 2)) {
      newArr.push(arr[i]);
      ++i;
      newState.cur = i;
      newState.next = j;
      animations.push(JSON.stringify(newState));
    }
    while (j <= r) {
      newArr.push(arr[j]);
      ++j;
      newState.cur = i;
      newState.next = j;
      animations.push(JSON.stringify(newState));
    }
    for (let i = l; i <= r; ++i) {
      arr[i] = newArr[i - l];
      newState.cur = i;
      newState.arr = arr;
      animations.push(JSON.stringify(newState));
    }
  }

  mergeSort() {
    this.setState({ start: true });
    let newArr = [];
    let animations = [];
    for (let i = 0; i < this.state.size; ++i) {
      newArr[i] = this.state.arr[i];
    }
    var newState = {
      arr: newArr,
      cur: -1,
      next: -1,
      upto: newArr.length,
      size: newArr.length,
    };

    this.mergeSortUtil(newArr, 0, newArr.length - 1, animations, newState);
    // console.log(newArr, animations);
    this.animate(animations);
  }

  bubbleSort() {
    this.setState({ start: true });
    let newArr = [];
    let animations = [];
    for (let i = 0; i < this.state.size; ++i) {
      newArr[i] = this.state.arr[i];
    }
    var newState = {
      arr: newArr,
      cur: -1,
      next: -1,
      upto: newArr.length,
      size: newArr.length,
    };
    for (let i = 0; i < this.state.size; ++i) {
      for (let j = 0; j < this.state.size - i - 1; ++j) {
        newState.cur = j;
        newState.next = j + 1;
        if (newArr[j] > newArr[j + 1]) {
          newArr[j] ^= newArr[j + 1];
          newArr[j + 1] ^= newArr[j];
          newArr[j] ^= newArr[j + 1];
          newState.arr = newArr;
        }
        animations.push(JSON.stringify(newState));
      }
      newState.upto = newArr.length - i - 2;
      animations.push(JSON.stringify(newState));
    }
    this.animate(animations);
    // console.log(this.state.arr);
    // console.log(newArr, animations);
  }

  animate(animations) {
    let i = 0;
    let animate = setInterval(() => {
      let temp = JSON.parse(animations[i]);
      if(!temp.hasOwnProperty("idxes")){
        temp.idxes = this.state.idxes;
      }
      this.setState({
        arr: temp.arr,
        idxes: temp.idxes,
        cur: temp.cur,
        next: temp.next,
        upto: temp.upto,
        size: temp.size,
      });
      ++i;
      if (i === animations.length) {
        this.setState({ upto: -1, cur: -1, next: -1 });
        clearInterval(animate);
      }
    }, 0.1);
  }

  render() {
    // console.log(this.state);
    // if (!this.state.start) {
    return (
      <>
        <div style={{width: "auto", backgroundColor: "black", boxShadow: "0 8px 6px -6px #3b3b3b", display: "flex", fiex: "row", justifyContent: "space-between"}}>
          <div style={{padding: "10px", color: "#00cc01", fontSize: "x-large"}}>Sorting Wait!</div>
          <input disabled={this.state.disabled} type="range" min="50" max="150" value={this.state.size} onChange={this.handleChange}></input>
          <div style={{padding: "10px"}}>
            <button style={{marginRight: "10px", backgroundColor: "#00cc01", color: "#1b1b1b", borderRadius: "5px", cursor: "pointer", border: "none", padding: "5px"}} disabled={this.state.disabled} name="bubble" onClick={this.handleClick}>
              {this.state.disabled ? "Disabled": "BubbleSort"}
            </button>
            <button style={{marginRight: "10px", backgroundColor: "#00cc01", color: "#1b1b1b", borderRadius: "5px", cursor: "pointer", border: "none", padding: "5px"}} disabled={this.state.disabled} name="merge" onClick={this.handleClick}>
              {this.state.disabled ?"Disabled" : "MergeSort"}
            </button>
            <button style={{marginRight: "10px", backgroundColor: "#00cc01", color: "#1b1b1b", borderRadius: "5px", cursor: "pointer", border: "none", padding: "5px"}} disabled={this.state.disabled} name="quick" onClick={this.handleClick}>
              {this.state.disabled ?"Disabled" : "QuickSort"}
            </button>
            <button style={{marginRight: "10px", backgroundColor: "#00ccFF", color: "#1b1b1b", borderRadius: "5px", cursor: "pointer", border: "none", padding: "5px"}} name="shuffle" onClick={this.handleClick}>
              Reshuffle
            </button>
          </div>
        </div>
        {!this.state.start && 
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {this.state.arr.map((elem, key) => {
              return (
                <div
                  key={key}
                  style={{
                    height: `${elem}px`,
                    width: `${this.state.width}px`,
                    backgroundColor: "purple",
                    margin: "1px",
                  }}
                ></div>
              );
            })}
          </div>
        }
        {this.state.start &&
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {this.state.arr.map((elem, key) => {
              return (
                <div
                  key={key}
                  style={{
                    height: `${elem}px`,
                    width: `${this.state.width}px`,
                    backgroundColor:
                      this.state.idxes[key] === 1
                        ? "#00cc01"
                        : this.state.cur === key
                        ? "yellow"
                        : this.state.next === key
                        ? "red"
                        : key > this.state.upto
                        ? "#00cc01"
                        : "purple",
                    margin: "1px",
                  }}
                ></div>
              );
            })}
          </div>
        }
      </>
    );
  }
}

export default Sort;
