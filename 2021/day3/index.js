const { sample, puzzle } = require('./parseInput');

function binStringToDec(eep){
    //eep = +eep;
    let counter = eep.length - 1;
    let total = 0;
    for (const dig of eep){
        
        total += (+dig)*Math.pow(2, counter);
        counter --;
    }
    return total
}

function main([input]) {
    let gamma = 0;
    let counter = input.length - 1; //power of 2
    for (const col of input) {
        let z = 0;
        let o = 0;
        for (const cell of col) {
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
        if (z > o) {
            //gamma += '0';
        }
        else if (o > z) {
            gamma += Math.pow(2, counter);
        }
        counter--;

    }
    return (Math.pow(2, input.length) - gamma - 1) * (gamma)
}

function main2([input, array], debug=false) {
    let oxygen = Array.from(array);
    let carbon = Array.from(array);
    for (const i of Object.keys(array[0])) {
        let o_z = 0;
        let o_o = 0;
        let c_z = 0;
        let c_o = 0;
        for (const code of oxygen) {
            switch (code[i]){
                case '0':
                    o_z++;
                    break
                case '1':
                    o_o++;
                    break
            }
        }
        for (const code of carbon) {
            switch (code[i]){
                case '0':
                    c_z++;
                    break
                case '1':
                    c_o++;
                    break
            }
        }
        if (o_z > o_o) {
            //if (debug) console.debug(i, o, z, oxygen);
            oxygen = oxygen.filter(e=>e[i]=='0');

        }
        else if (o_o >= o_z) {
            //if (debug) console.debug(i, oxygen);
            oxygen = oxygen.filter(e=>e[i]=='1');

        }
        if (c_z > c_o) {
            //if (debug) console.debug(i, c_z, c_o, carbon);
            if (carbon.length > 1) carbon = carbon.filter(e=>e[i]=='1');

        }
        else if (c_o >= c_z) {
            //if (debug) console.debug(i, c_z, c_o, carbon);

            if (carbon.length > 1) carbon = carbon.filter(e=>e[i]=='0');
        }

    }
    //console.debug(oxygen, carbon)
    return binStringToDec(oxygen[0])*binStringToDec(carbon[0])
}

function displayAnswer() {
    console.log('Part A:')
    console.log('\tSample Answer:')
    console.log('\t', main(sample));
    console.log('\n\tPuzzle Answer:')
    console.log('\t', main(puzzle));
    console.log('-------------------\nPart B:')
    console.log('\tSample Answer:')
    console.log('\t', main2(sample));
    console.log('\n\tPuzzle Answer:')
    console.log('\t', main2(puzzle));


}
displayAnswer()
