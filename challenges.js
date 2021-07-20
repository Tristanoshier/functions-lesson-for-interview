/* 
    Challenge 1

    Write a tip calculator function that takes in a number total 
    and a decimal value for the amount you want to tip (better be .20 or higher ;) lol)
    This function should return the final total of your bill (bill + tip)
*/


/* 
    Challenge 2

    Take the bill function down below and change it into a arrow function.
    Sample arguements have been provided for you but feel free to change them.
*/

function bill(products, tax) {
    let total = 0
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax
    }
    return total
}

console.log(bill([30, 25, 9], .07))


/* 
    Challenge 3

    use the forEach method that will take in a callback function and iterate over a to do list array and
    print out the values like so:

     1. make the bed
     2. wash the dishes
     3. buy groceries
     4. feed the dog

     The to do list array has been provided for you but feel free to change it.
*/

let toDoList = ["make the bed", "wash the dishes", "buy groceries", "feed the dog"]
