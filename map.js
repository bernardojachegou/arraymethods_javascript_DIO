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

// Return a new array with the selected values;

const returnNames = (pet) => pet.name;
const petNames = pets.map((pet) => returnNames(pet));

// Return more than one property

const simplePetNamesAndAge = pets.map((pet) => {
    return {
        name: pet.name,
        age: pet.age
    }
});

// forEach doesn't return a new array, we must push the selected items to the same array;

console.log(pets);
console.log(petNames);
console.log(simplePetNamesAndAge);