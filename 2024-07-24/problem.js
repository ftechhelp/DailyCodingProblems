
//did by myself
function anyTwoNumbersAddUpToWith2Passes(k)
{
    let list = [10, 25, 3, 7];

    for (i = 0; i < list.length; i++)
    {
        for (ii = 0; ii < list.length; ii++)
        {
            if (i === ii)
                continue;

            if (list[i] + list[ii] === k)
                return true;
        }
    }

    return false;
}

//Needed copilot's help to solve
function anyTwoNumbersAddUpToWith1Pass(k)
{
    let list = [10, 25, 3, 7];
    let seen = new Set();

    for (let number of list)
    {
        let complement = k - number;
        console.log(`Number: ${number}, Complement: ${complement}, Seen: ${Array.from(seen)}`);

        if (seen.has(complement))
        {
            console.log(`Found: ${number} + ${complement} = ${k}`);
            return true;
        }

        seen.add(number);
    }

    return false;
}

console.log(anyTwoNumbersAddUpToWith2Passes(17));

console.log(anyTwoNumbersAddUpToWith1Pass(17));