function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0 ; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  var i = 0;
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push(`I love the Beatles!`)
    n++
  }
  while (n < 15)

return array
}

/* function theBeatlesPlay(m, instrument) {
  var array = []
  for (let i = 0; i < m.length; i++) {
    array.push(`${m[i]} plays ${instrument[i]}`)
  }
  return array 
}
//creates an empty array and puts into it each of the members and their what instrument they play into the array.  Then returns the array.
function johnLennonFacts(array) {
  var facts = []
  let i = 0;
  while (i < array.length) {
  facts.push(`${array[i]}!!!`)
  i++
  }
  return facts
}
//creates an empty array (facts) to store the information in.  Starts with the first fact and adds it to the FACTS array.  Does this i times until everything is in.  Then returns facts. 

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push(`I love the Beatles!`)
    n++
  }
  while (n < 15) 
  return array 
  }
//takes empty array and adds I love the beatles to it 15 times.  Then returns the array. 

*/
