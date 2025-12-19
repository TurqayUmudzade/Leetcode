var shortestDistance = function (maze, start, destination) {
    let m = maze.length
    let n = maze[0].length
    let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    const dfs = (i, j) => {


        for (const dir of dirs) {

        }

    }

    dfs(start[0], start[1])


};

let maze = [[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], start = [0, 4], destination = [4, 4]

console.log(shortestDistance(maze, start, destination));