var networkDelayTime = function (times, n, k) {

  const adjList = new Array(n).fill(0).map(() => []);
  const trackList = new Array(n).fill(Infinity)

  trackList[k - 1] = 0;

  for (let i = 0; i < times.length; i++) {
    let time = times[i]
    if (adjList[time[0] - 1]) {
      adjList[time[0] - 1].push([time[1] - 1, time[2]])
    } else {
      adjList[time[0] - 1] = [[time[1] - 1, time[2]]]
    }
  }
  const seen = {};

  function findMin(trackList) {
    let min = null;
    let minIdx = null;
    for (let i = 0; i < trackList.length; i++) {
      if (seen[i]) continue;
      if (min === null) {
        min = trackList[i];
        minIdx = i;
        continue;
      }

      if (trackList[i] < min) {
        min = trackList[i];
        minIdx = i;
      }
    }
    return minIdx;
  }

  while (true) {
    let min = findMin(trackList);
    if (min === null) break;
    seen[min] = true;
    let nodes = adjList[min];
    let currVal = trackList[min];
    for (let i = 0; i < nodes.length; i++) {
      trackList[nodes[i][0]] = Math.min(trackList[nodes[i][0]], nodes[i][1] + currVal)
    }
  }


  let max = Math.max(...trackList)

  return max === Infinity ? -1 : max

};