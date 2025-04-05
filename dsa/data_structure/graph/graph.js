/*
 * Graph Data Structure
 * Graph Data Strucuture is a non-linear data structure consisting of vertices and edges.
 * It is useful in fields such as social network analysis, recommendation sysytems, and computer betworks.
 */

class UndirectedGraph {
    constructor(vertices) {
        let matrix = Array.from(Array(vertices), () => Array(vertices).fill(0));
        this.matrix = matrix;
        this.vertices = vertices;
    }

    addEdge(v1, v2) {
        this.matrix[v1][v2] = 1;
        this.matrix[v2][v1] = 1;
    }

    removeEdge(v1, v2) {
        this.matrix[v1][v2] = 0;
        this.matrix[v2][v1] = 0;
    }

    displayAdjacencyMatrix() {
        for (const row of this.matrix) {
            console.log(row.join(" "));
        }
    }

    displayAdjacencyList() {
        for (let i = 0; i < this.vertices; i++) {
            let list = [];
            for (let j = 0; j < this.vertices; j++) {
                if (this.matrix[i][j] === 1) {
                    list.push(j);
                }
            }
            console.log(`${i} -> ${list.join(" ")}`);
        }
    }
}

class DirectedGraph {
    constructor(vertices) {
        let matrix = Array.from(Array(vertices), () => Array(vertices).fill(0));
        this.matrix = matrix;
        this.vertices = vertices;
    }

    addEdge(v1, v2) {
        this.matrix[v1][v2] = 1;
    }

    removeEdge(v1, v2) {
        this.matrix[v1][v2] = 0;
    }

    displayAdjacencyMatrix() {
        for (const row of this.matrix) {
            console.log(row.join(" "));
        }
    }

    displayAdjacencyList() {
        for (let i = 0; i < this.vertices; i++){
            let list = [];
            for (let j = 0; j < this.vertices; j++){
                if (this.matrix[i][j] === 1) {
                    list.push(j);
                }
            }
            console.log(`${i} -> ${list.join(" ")}`);
        }
    }
}

function transpose(graph) {
    let transposeGraph = new DirectedGraph(graph.vertices);
    for (let i = 0; i < graph.vertices; i++) {
        for (let j = 0; j < graph.vertices; j++){
            if (graph.matrix[i][j] === 1){
                transposeGraph.addEdge(j, i);
            }
        }
    }
    return transposeGraph;
}


function main () {
    console.log("Graph Data Structure");
    console.log("Undirected Graph");
    const graph = new UndirectedGraph(4);
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.displayAdjacencyMatrix();
    graph.displayAdjacencyList();

    console.log("Directed Graph");
    const graph2 = new DirectedGraph(4);
    graph2.addEdge(0, 1);
    graph2.addEdge(0, 2);
    graph2.addEdge(1, 2);
    graph2.addEdge(2, 3);
    graph2.displayAdjacencyMatrix();
    graph2.displayAdjacencyList();

    console.log("Transpose Graph");
    const transposeGraph = transpose(graph2);
    transposeGraph.displayAdjacencyMatrix();
    transposeGraph.displayAdjacencyList();
}

main();

