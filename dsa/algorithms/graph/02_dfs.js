/*
 * Depth First Search
 * In depth first search, we traverse all the adjacent vertices one by one but
 * we complete traversal of all vertices reachable from a given vertex before
 * moving to other vertices.
 */

function dfsRecursive(graph, start, res, visited) {
    if (!graph[start]) {
        return res;
    }
    res.push(start);
    visited[start] = true;
    for (let i = 0; i < graph[start].length; i++) {
        if (!visited[graph[start][i]]) {
            dfsRecursive(graph, graph[start][i], res, visited);
        }
    }
    return res;
}

function dfs(graph, start) {
    let res = [];
    let visited = new Array(graph.length).fill(false);

    dfsRecursive(graph, start, res, visited);

    return res;
}

function main () {
    console.log('Depth First Search');
    console.log('==================');
    console.log('Undirected Graph');
    const graph = [
        [1, 2],
        [0, 2],
        [0, 1, 3, 4],
        [2],
        [2]
    ];

    res = dfs(graph, 0);
    console.log('DFS: ' + res);
}

main();
