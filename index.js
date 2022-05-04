const { Input, AutoComplete } = require('enquirer');

// What formula do they need to use
const askFormula = new AutoComplete({
    name: 'Formula',
    message: 'What Formula?',
    limit: 5,
    initial: 0,
    choices: [
        'Permutation',
        'Combination',
        '2',
    ]
});

// For Permutations & Combination| Number of Objects
const askNoO = new Input({
    name: 'NoO',
    message: 'Number of Objects? '
});

// For Permutations & Combination | Set of Objects
const askSoO = new Input({
    name: 'SoO',
    message: 'Set of Objects? '
});

const run = async () => {
    const formula = await askFormula.run();

    if (formula == "Permutation") {
        const NoO = await askNoO.run();
        const SoO = await askSoO.run();

        // Convert from Strings to Ints
        let n = +NoO;
        let r = +SoO;
        
        // Final Ints
        let nFinal = 1;
        let btmNumber;
        let btmFinal = 1;

        // Factor N
        for (let i = 1; i < n + 1; i++) {
            nFinal = nFinal * i;
        }

        // Subtract N and R For Bottom Factor
        btmNumber = n - r;

        // Factor Bottom Number
        for (let i = 1; i < btmNumber + 1; i++) {
            btmFinal = btmFinal * i;
        }
        
        // Devide N and Bottom Number
        let Answer = nFinal / btmFinal;

        console.log(Answer);
    } else if (formula == "Combination") {
        const NoO = await askNoO.run();
        const SoO = await askSoO.run();

        // Strings to Ints
        let n = +NoO;
        let r = +SoO;

        // Final Ints
        let nFinal = 1;
        let rFinal = 1;
        let btm2Number;
        let btm2Final = 1;

        // Factor N
        for (let i = 1; i < n + 1; i++) {
            nFinal = nFinal * i;
        }

        // Factor R
        for (let i = 1; i < r + 1; i++) {
            rFinal = rFinal * i;
        }

        // Subtract N & R For 2nd Bottom Factor
        btm2Factor = n - r;

        // Factor 2nd Bottom Number
        for (let i = 1; i < btm2Factor + 1; i++) {
            btm2Final = btm2Final * i;
        }

        // Solve for Final Number
        let Answer = nFinal / (rFinal * btm2Final);

        console.log(Answer);
    }
}

run();