const cost = [100, 200, 300];
const person = {
    name: "Khairul",
    salary: 50000
}

const [first, ...rest] = cost;
const updateCost = [...rest, 500];

const {name, ...rest2} = person;
const updateperson = {...rest2, tax: 10};

function totalCost(update){
    let sum = 0;
     for(let upd of update){
        sum = sum + upd;
     }
     return sum;
}

const updCost = totalCost(updateCost);


function wages(costs, updPerson){
    const tax = updPerson.tax/100;
    const finalCost = (updPerson.salary * tax) - costs;
    const salary = updPerson.salary - finalCost;
    return salary;
}

console.log(`Total salary remaining is: ${wages(updCost, updateperson)} $`);