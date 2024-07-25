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

            multipliedNumber *= currentArray[j];
        }

        newArray.push(multipliedNumber);
    }

    return newArray;
}

console.log(produceNewArray([1, 2, 3, 4, 5]));