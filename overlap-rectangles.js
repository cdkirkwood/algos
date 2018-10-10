var isRectangleOverlap = function(rec1, rec2) {
    const [rec1x1, rec1y1, rec1x2, rec1y2] = rec1
    const [rec2x1, rec2y1, rec2x2, rec2y2] = rec2
    if (rec1y2 > rec2y2) {
      if (rec2y2 <= rec1y1) return false
      return checSides(rec2x2, rec1x2, rec1x1, rec2x1)
    } else if (rec1y2 < rec2y2){
      if (rec1y2 <= rec2y1) return false
      return checSides(rec2x2, rec1x2, rec1x1, rec2x1)
    } else {
      return checSides(rec2x2, rec1x2, rec1x1, rec2x1)
    }
};


function checSides(rec2x2, rec1x2, rec1x1, rec2x1) {
  if (rec2x2 > rec1x2 && rec1x2 > rec2x1) return true
  if (rec2x2 < rec1x2 && rec2x2 > rec1x1) return true
  return false
}


console.log(isRectangleOverlap([0, 0, 2, 2], [1,1,3,3]))