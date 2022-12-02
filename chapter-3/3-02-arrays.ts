const arrayone = [7, 6, 8, 9, 2, 25];
const arraytwo = [6, 8, 9, 2, 25];
const arraythree = [6, 8, 9, 2, 25, 7];

function arrayCompare(a1: number[], a2: number[]): boolean {
    if(a1.length !== a2.length) {
        return false;
    }
    const a1String = a1.sort().toString();
    const a2String = a2.sort().toString();

    return a1String === a2String
}

console.log(
    `Are ${arrayone} and ${arraytwo} equal?`,
    arrayCompare(arrayone, arraytwo)
);
console.log(
    `Are ${arrayone} and ${arraythree} equal?`,
    arrayCompare(arrayone, arraythree)
);
console.log(
    `Are ${arraytwo} and ${arraythree} equal?`,
    arrayCompare(arraytwo, arraythree)
);