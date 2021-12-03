const { sample, puzzle } = require('./parseInput');

function main(input){
    let gamma = 0;
    let counter = input.length - 1; //power of 2
    for (const col of input){
        let z = 0;
        let o = 0;
        for (const cell of col){
            //console.log(cell)
            switch (cell) {
                case '0':
                    z++;
                    break
                case '1':
                    o++
                    break
            }
        }
        if (z>o){
            //gamma += '0';
        }
        else if (o>z){
            gamma += Math.pow(2, counter);
        }
        counter --;

    }
    return (Math.pow(2, input.length) - gamma - 1)*(gamma)
}

function main2(input){

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
