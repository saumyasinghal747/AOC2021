const { sample: stxt, puzzle:ptxt } = require('./input.json');

function parseInput(txt){
    const array = txt.split('\n').map(e=>e.split(''));
    return [array[0].map((_, colIndex) => array.map(row => row[colIndex])), array];
}

module.exports =  {
    parseInput,
    sample: parseInput(stxt),
    puzzle: parseInput(ptxt)
}


