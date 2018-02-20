class Sorter {
  constructor() {
    this.data = [ ];
    this.compareFunction = bla;
  }

  add(element) {
    this.data.push (element);
  }

  at(index) {
    return this.data[index];
  }

  get length() {
   return this.data.length;
  }

  toArray() {
    return this.data;
  }

  sort(indices) {
    let bufer = [];
    for (let i = 0; i < this.data.length; i++){ 
      if (indices.indexOf(i) != -1) { 
      bufer.push(this.data[i]);
      } 
    }

    bufer.sort(this.compareFunction);
    indices.sort();
    for (let j = 0; j < indices.length; j++) {
      this.data[indices[j]] = bufer[j];
    }   
  }

  setComparator(compareFunction) {
      this.compareFunction = compareFunction;
  
}
}

const bla = (a,b) => a-b ;

module.exports = Sorter;