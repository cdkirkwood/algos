//list of players
//[strings of names]

//list of rounds represented by number
//represents number of ducks
//person who is goose gets take out of list
//on less round than players
//who is winner
//starts from where is left off

//['sally', 'john']
//[1]
//winner = 'sally'

function duckDuck(players, rounds, startIdx = 0) {
  if (players.length === 1) return players[0]
  let numDucks = rounds.shift()
  numDucks = numDucks % players.length
  while (numDucks > 0) {
    numDucks--
    if (startIdx === players.length - 1) startIdx = 0
    else startIdx++
  }
  players.splice(startIdx, 1)
  return duckDuck(players, rounds, startIdx)
}

console.log(duckDuck(['sally', 'john', 'ralph', 'henry'], [1, 35,  12]))