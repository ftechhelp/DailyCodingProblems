class Node 
{
    constructor(value, left, right) 
    {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function serialize(node)
{
    if (node === null)
        return null;

    return JSON.stringify(node);
}

function deserialize(nodeJSON) 
{
    if (nodeJSON === null)
        return;

    return JSON.parse(nodeJSON, true);
}

let node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));

console.assert(deserialize(serialize(node)).left.left.value == 'left.left');