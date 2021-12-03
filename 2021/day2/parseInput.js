const { sample: stxt, puzzle:ptxt } = require('./input.json');

function parseInput(txt){
    return txt.split('\n').map(e=>{
        let [dir, mag] = e.split(' ');
        mag = +mag;
        return {dir, mag};
    })
}

module.exports =  {
    parseInput,
    sample: parseInput(stxt),
    puzzle: parseInput(ptxt)
}


