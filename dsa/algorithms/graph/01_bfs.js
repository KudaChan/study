/*
 * Breadth-first search
 * It is a fundamental graph traversal algorithm.
 * It begins at the root node and explores all the neighbor nodes at the
 * present depth prior to moving on to the nodes at the next depth level.
 *
 * Popular graph algorithms that use BFS as a building block:
 * 1. Dijkstra's algorithm for the single-source shortest path problem.
 * 2. Kahn's algorithm for a topological sort.
 * 3. Prims algorithm for a minimum spanning tree.
 *
 * Time complexity: O(|V| + |E|)
 * Space complexity: O(|V|)
 */

function bfs (graph, startNode, visited = [], res = []) {
    let queue = [];
    if (visited.length === 0) {
        visited = new Array(Object.keys(graph).length).fill(false);
    }

    visited[startNode] = true;
    queue.push(startNode);

    while (queue.length > 0) {
        let node = queue.shift();
        visited[node] = true;
        res.push(node);
        for (let i = 0; i < graph[node].length; i++){
            if (!visited[graph[node][i]]){
                visited[graph[node][i]] = true;
                queue.push(graph[node][i]);
            }
        }
    }
    return res;
}

function bfsDisconnected(graph, startNode) {
    let visited = new Array(Object.keys(graph).length).fill (false);
    let v = Object.keys(graph).length;
    let res = [];

    for (let i = 0; i < v; i++) {
        if (!visited[i]) {
            bfs(graph, i, visited, res);
        }
    }
    return res;
}

function main() {
    const graph = {
        0: [1, 2],
        1: [2],
        2: [0, 3],
        3: [3],
    };
    console.log("Connected graph: ")
    console.log(bfs(graph, 2));

    const graph2 = {
        0: [1, 2],
        1: [2],
        2: [0, 3],
        3: [3],
        4: [5],
        5: [4]
    };
    console.log("Disconnected graph: ")
    console.log(bfsDisconnected(graph2, 2));
}

main();
