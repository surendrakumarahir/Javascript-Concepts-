class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//   a
//  /  \
//  b   c
// / \   \ 
// d  e    f

const a = new Node('a');
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// depth search , a, b, d, e, c, f

// function depthfirstSearch(root) {
//     if(root === null) return false;
//     let result = [];
//     let stack = [root];
//     while(stack.length > 0) {
//         const current = stack.pop();
//         result.push(current);
//         current.right && stack.push(current.right);
//         current.left && stack.push(current.left);
//     }

//     return result;

// }

// console.log(depthfirstSearch(a))


const depthfirstSearchRecursion = (root) => {
    if(root === null) return []
    const leftValue = depthfirstSearchRecursion(root.left);
    const rightValue = depthfirstSearchRecursion(root.right)
    return [root, ...leftValue, ...rightValue]
}

console.log("depth first search recursion", depthfirstSearchRecursion(a))






