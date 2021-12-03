const { sample, puzzle } = require('./parseInput');

function main(input){
    let depth = 0;
    let horizontal = 0;
    for (const instruction of input){
        switch (instruction.dir) {
            case 'up':
                depth -= instruction.mag;
                break
            case 'down':
                depth += instruction.mag;
                break
            case 'forward':
                horizontal += instruction.mag;
                break
            default:
                console.error(instruction.dir)
        }
    }

    return depth * horizontal;
}

function main2(input){
    let aim = 0;
    let horizontal = 0;
    let depth = 0;
    for (const instruction of input){
        switch (instruction.dir) {
            case 'up':
                aim -= instruction.mag;
                break
            case 'down':
                aim += instruction.mag;
                break
            case 'forward':
                horizontal += instruction.mag;
                depth += aim*instruction.mag
                break
            default:
                console.error(instruction.dir)
        }
    }

    return horizontal*depth
}

function displayAnswer(){
    console.log('Part A:')
    console.log('\tSample Answer:')
    console.log('\t', main(sample));
    console.log('\n\tPuzzle Answer:')
    console.log('\t',main(puzzle));
    console.log('-------------------\nPart B:')
    console.log('\tSample Answer:')
    console.log('\t', main2(sample));
    console.log('\n\tPuzzle Answer:')
    console.log('\t',main2(puzzle));


}

displayAnswer()
