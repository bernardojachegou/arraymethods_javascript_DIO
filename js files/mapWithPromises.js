// Array with promises;

const myArray = ['M', 'i', 'c', 'h', 'e', 'l'];

(async function () {
    // Promise function structure
    const promiseFunction = async (element) => {
        return new Promise((resolve, reject) => {
            return resolve(`letter - ${element}`)
        })
    }

    const myArrayMappedPromises = myArray.map(promiseFunction);

    const myArrayMapped = await Promise.all(myArrayMappedPromises)

    console.log(myArrayMapped);
})()