const { sample: stxt, puzzle:ptxt } = require('./input.json');

function parseInput(txt){
    return txt.split('\n').map(e=>(+e));
}

module.exports =  {
    parseInput,
    sample: parseInput(stxt),
    puzzle: parseInput(ptxt)
}


