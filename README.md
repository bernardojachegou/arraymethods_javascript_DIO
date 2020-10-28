# Javascript Array Methods: Filter, Map and Reduce

## Base Array used in the examples
```javascript
const pets = [
    { type: 'dog', name: 'hex', age: 15, weight: 14 },
    { type: 'cat', name: 'bolt', age: 2, weight: 5 },
    { type: 'fish',name: 'nemo', age: 1, weight: 0.01 }
]
```

## Filter
The filter() method creates an array filled with all array elements that pass a test (provided as a function).

#### Example
```javascript
// Filter pets by age <= 5
const filteredPets = pets.filter((pet) => {
    return pet.age <= 5;
})
```

## Map
The map() method creates a new array with the results of calling a function for every array element.

#### Example
```javascript
// Return a new array with the selected values;
const returnNames = (pet) => pet.name;
const petNames = pets.map((pet) => returnNames(pet));
```

## Reduce
The reduce() method reduces the array to a single value.
The return value of the function is stored in an accumulator (result/total).

#### Example
```javascript
// Return the result of a selected value;
const petsWeight = pets.reduce((total, pet) => {
    return total + pet.weight;
}, 0)
```

[https://www.w3schools.com/]