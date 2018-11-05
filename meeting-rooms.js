var canAttendMeetings = function(intervals) {
  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      if (!isOverlap(intervals[i], intervals[j])) return false
    }
  }
  return true
};

function isOverlap(firstTime, secondTime) {
  if (firstTime.end >= secondTime.end) {
    return firstTime.start >= secondTime.end
  } else {
    return secondTime.start >= firstTime.end
  }
}

console.log(canAttendMeetings([[7,10], [2,4]]))