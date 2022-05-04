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
        'Arithmetic Sequence',
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

// For Arithmetic Sequence | First Term of listed numbers
const askFirstTerm = new Input({
    name: 'FT',
    message: 'First Term? '
});

// For Arithmetic Sequence | Term Number you want
const askNoT = new Input({
    name: 'NoT',
    message: 'What Term Number? '
});

// For Arithmetic Sequence | Difference of Listed Numbers
const askDiff = new Input({
    name: 'Diff',
    message: 'Difference? '
});

const run = async () => {
    const formula = await askFormula.run();

    if (formula == "Permutation") {
        const NoO = await askNoO.run();
        const SoO = await askSoO.run();

        // Formula
        console.log("nPr = n!/(n-r)!");

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

        // Formula
        console.log("nCr = n!/r!(n-r)!");

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
    } else if (formula == "Arithmetic Sequence") {
        const FT = await askFirstTerm.run();
        const NoT = await askNoT.run();
        const Diff = await askDiff.run();

        // Formula
        console.log("An = a + (n-1)d")

        // Strings to Ints
        const a = +FT;
        const n = +NoT;
        const d = +Diff;

        // Final Ints
        let Answer;
        
        // Number of Terms - 1 & Multiplying by Difference, Then Adding First Term
        Answer = ((n - 1) * d) + a;

        console.log(Answer);
    }
}

run();