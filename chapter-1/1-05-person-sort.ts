interface Person {
    firstName: string;
    lastName: string;
}

let count = 0;
function getFullName (person: Person) {
    count += 1;
    return `${person.firstName} ${person.lastName}`;
}


const programmers: Person[] = [
    { firstName: 'Donald', lastName: 'Knuth'},
    { firstName: 'Barbara', lastName: 'Liskow'},
    { firstName: 'Lars', lastName: 'Bak'},
    { firstName: 'Guido', lastName: 'Van Rossum'},
    { firstName: 'Anders', lastName: 'Hejslberg'},
    { firstName: 'Edsger', lastName: 'Dijkstra'},
    { firstName: 'Brandon', lastName: 'Eich'},
    // feel free to add as many as you want
];

// a naive and straightforward sorting function
function naiveSortPersons (persons: Person[]): Person[] {
    return persons.slice().sort((first, second) => {
        const firstFullName = getFullName(first);
        const secondFullName = getFullName(second);
        return firstFullName.localeCompare(secondFullName);
    })
}

// optimized version
function schwartzSortPersons (persons: Person[]): Person[] {
    const tuples: [Person, string][] = persons.map(person => [person, getFullName(person)]);
    tuples.sort((first, second) => first[1].localeCompare(second[1]));
    return tuples.map(tuple => tuple[0]);
}

count = 0;
const sortedNaive = naiveSortPersons(programmers);

console.log(sortedNaive);
console.log(`When called using the naive approach, the function was called ${count} times`);

count = 0;
const sortedSchwartz = schwartzSortPersons(programmers);

console.log(sortedSchwartz);
console.log(`When called using the Schwartzian transform approach, the function was called ${count} times`);