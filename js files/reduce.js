const pets = [
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },
    {
        type: 'cat',
        name: 'mingal',
        age: 6,
        weight: 10
    },
    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 22
    },
    {
        type: 'cat',
        name: 'bolt',
        age: 1,
        weight: 5
    },
    {
        type: 'fish',
        name: 'nemo',
        age: 2,
        weight: 0.01
    },
    {
        type: 'horse',
        name: 'brown',
        age: 7,
        weight: 140
    },
]

// Return the result of a selected value;

const petsWeight = pets.reduce((total, pet) => {
    return total + pet.weight;
}, 0)

// Returning total age;
// Remember to pass the initial value at the reduce structure;

const petsAge = pets.reduce((total, pet) => {
    return total + pet.age;
}, 0)

// Return more than one value;

const petsTotalAgeAndWeight = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, { totalAge: 0, totalWeight: 0 })

// Using reduce as map and filter to reduce a especific filtered value;

const dogsWeight = pets.reduce((total, pet) => {
    if (pet.type !== 'dog') return total;

    return total + pet.weight;
}, 0)

console.log(petsWeight);
console.log(petsAge);
console.log(petsTotalAgeAndWeight);
console.log(dogsWeight);