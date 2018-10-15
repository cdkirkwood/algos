var merge = function (intervals) {
  if (!intervals.length) return []
  const sortedIntervals = intervals.sort((a, b) => a.start - b.start)
  const newIntervals = [sortedIntervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    for (let j = 0; j < newIntervals.length; j++) {
      if (sortedIntervals[i].start <= newIntervals[j].end) {
        newIntervals[j].end = Math.max(sortedIntervals[i].end, newIntervals[j].end)
      } else if (j === newIntervals.length - 1) {
        newIntervals.push(sortedIntervals[i])
      }
    }
  }
  return newIntervals
};

// [[1,3],[2,3],[2,2],[2,2],[3,3],[4,6],[5,7],]