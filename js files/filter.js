const pets = [
    {
        name: "Bob",
        type: "dog",
        age: 7
    },
    {
        name: "Bolt",
        type: "cat",
        age: 1
    },
    {
        name: "Sab",
        type: "fish",
        age: 2
    },
]

// Filter pets by age <= 5

const filteredPets = pets.filter((pet) => {
    return pet.age <= 5;
})

// Short syntax

const youngAge = (age) => age < 5
const filteredPetsShort = pets.filter(({ age }) => youngAge(age));

// FIlter pets by types

const petsByType = pets.filter((pet) => {
    return pet.type == "cat";
})

console.log(pets);
console.log(filteredPets);
console.log(filteredPetsShort);
console.log(petsByType);