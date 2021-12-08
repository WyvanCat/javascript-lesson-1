// ANSWER TO THE QUESTION: 

// Javascript needs the paranthesis because of operator precedence. 
// Multiplication and division has the same precedence number, so therefore
// you need to establish what should be calculated first. 

// CASE 1

let triangleOne = (10 * 13) / 2; 
let triangleTwo = (16.5 * 20.3) / 2;

const biggerTriangle = triangleOne > triangleTwo ? "the first triangle" : "the second triangle";
console.log(`Triangle one has an area of ${triangleOne} cm while triangle two has an 
area of ${triangleTwo} cm. The biggest triangle is ${biggerTriangle}.`)

// CASE 2 

triangleOne = (16.5 * 20.3) / 2; 
triangleTwo = (20.3 * 16.5) / 2;

if (triangleOne > triangleTwo) { 
    console.log(`Triangle one has an area of ${triangleOne} cm while triangle two has an 
    area of ${triangleTwo} cm. The biggest triangle is ${biggerTriangle}.`)
} else if (triangleOne < triangleTwo) { 
    console.log(`Triangle one has an area of ${triangleOne} cm while triangle two has an 
    area of ${triangleTwo} cm. The biggest triangle is ${biggerTriangle}.`)
} else { 
    console.log(`Triangle one has an area of ${triangleOne} cm while triangle two has an
     area of ${triangleTwo} cm. The triangles are equally big.`)
}

// CASE 3 

triangleOne = (7.8 * 5.6) / 2;
triangleTwo = (9.3 * 12.4) / 2;

console.log(`Triangle one has an area of ${(7.8 * 5.6) / 2} while triangle two 
has an area of ${(9.3 * 12.4) / 2}. The biggest triangle is ${triangleOne > triangleTwo ? 
    "the first triangle" : "the second triangle"}`);



