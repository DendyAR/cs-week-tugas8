const tvrl = require("./function");

class NewTree {
  constructor() {
    this.temp = null;
  }

  nodeI(data) {
    data.reduce((acc, value, index) => {
      acc[value.node] = index;
      return (this.temp = acc);
    }, {});
  }

  result(data) {
    let root;
    data.forEach((el) => {
      if (el.parent === null) {
        root = el;
        return;
      }
      const P1 = data[this.temp[el.parent]];
      P1.children = [...(P1.children || []), el];
    });
    return root;
  }
}

const data = [
  { node: "A", parent: null },
  { node: "B", parent: "A" },
  { node: "C", parent: "A" },
  { node: "D", parent: "A" },
  { node: "E", parent: "A" },
  { node: "F", parent: "A" },
  { node: "G", parent: "B" },
];

let tree = new NewTree();
tree.nodeI(data);
let result = tree.result(data);
console.log(result);
let resultData = new tvrl(result);
resultData.bfs();
resultData.dfs();
