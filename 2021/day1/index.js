const { sample, puzzle } = require('./parseInput');

function main(input){
    let ctr = 0;
    Array.from(input).forEach(function (value, index, array) {
        if (index === 0) return;
        ctr += (array[index-1] < value)
    })

    return ctr
}

function main2(input){
    let ctr = 0;
    Array.from(input).forEach(function (value, index, array) {
        if (index <= 2) return;
        ctr += (array[index-3] < value)
    })

    return ctr
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
