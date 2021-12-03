const { sample: stxt, puzzle:ptxt } = require('./input.json');

function parseInput(txt){

}

module.exports =  {
    parseInput,
    sample: parseInput(stxt),
    puzzle: parseInput(ptxt)
}


