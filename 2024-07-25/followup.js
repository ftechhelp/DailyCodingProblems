function multiply(number, numberOfTimes)
{
    let newMultipliedNumber = 0;

    while (numberOfTimes != 0)
    {
        newMultipliedNumber += number;
        numberOfTimes--;
    }

    return newMultipliedNumber;
}

function produceNewArray(currentArray)
{
    let newArray = [];

    for (i = 0; i < currentArray.length; i++)
    {
        let multipliedNumber = 1;

        for (j = 0; j < currentArray.length; j++)
        {
            if (j === i)
                continue;

            multipliedNumber = multiply(multipliedNumber, currentArray[j]);
        }

        newArray.push(multipliedNumber);
    }

    return newArray;
}

console.log(produceNewArray([1, 2, 3, 4, 5]));
console.log(produceNewArray([3, 2, 1]));