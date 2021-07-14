class Graph {
  constructor(tree, vertices) {
    this.treeB = tree;
    this.treeD = tree;
    this.vertices = vertices;
    this.adjacencyList = new Map();
  }
  addVertex(v) {
    this.adjacencyList.set(v, []);
  }

  addEdge(v, w) {
    this.adjacencyList.get(v).push(w);
    this.adjacencyList.get(w).push(v);
  }

  showGraph() {
    const vertices = this.vertices;
    const edges = this.adjacencyList;
    return { vertices, edges };
  }

  printGraph() {
    let keys = this.adjacencyList.keys();
    for (let v of keys) {
      let eList = this.adjacencyList.get(v);
      let data = "";
      for (let e in eList) {
        data = data + eList[e] + " ";
      }
      console.log(v + " -> " + data);
    }
    return keys;
  }

  bfs() {
    let arr = [];
    let res = "";
    arr.push(this.treeB);

    while (arr.length > 0) {
      this.treeB = arr.shift();
      res += this.treeB.node + " ";
      if (this.treeB?.children?.length) {
        for (let i = 0; i < this.treeB.children.length; i++) {
          arr.push(this.treeB.children[i]);
        }
      }
    }
    console.log("Data From BFS :" + res);
  }

  dfs() {
    let arr = [];
    let res = "";
    arr.push(this.treeD);
    while (arr.length > 0) {
      this.treeD = arr.pop();
      res += this.treeD.node + " ";
      if (this.treeD?.children?.length) {
        for (let i = this.treeD.children.length - 1; i >= 0; i--) {
          arr.push(this.treeD.children[i]);
        }
      }
    }
    console.log("Data From DFS :" + res);
  }
}

const g = new Graph(7);

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");

g.addEdge("A", "B", 16);
g.addEdge("A", "C", 22);
g.addEdge("A", "D", 25);
g.addEdge("B", "D", 14);
g.addEdge("B", "E", 26);
g.addEdge("C", "D", 9);
g.addEdge("C", "G", 35);
g.addEdge("D", "F", 24);
g.addEdge("E", "F", 15);
g.addEdge("E", "G", 28);
g.addEdge("F", "G", 8);

let show = g.showGraph();
let result = g.printGraph("B", "G");
console.log("Show data: ", show, "This is Result: ", result);

module.exports = Graph;
