/* 
    Functions - topics to cover for this lesson

    1. Function Arguments and Parameters
    2. Return Functions
    3. Arrow Functions
    4. Methods vs Functions
    5. Callback Functions
*/

// 1. -------------------------------------------------------
let firstName

firstName = "tristan"
console.log(firstName)

firstName = "adam"
console.log(firstName)

firstName = "justin"
console.log(firstName)

// shouldnt this be easier? 

// BAM functions

// function key word | function name | parameters(explain soon)
function printName(myName) {
    // what you want the funtion to do
    console.log(myName)
}

// show undefined if no arguement
printName()

// cant use before declaration if assigning var to function
// printFirstName("Tristan")

let printFirstName = function(myName) {
        console.log(myName + " is cool")
}

printFirstName("Tristan")


//explain arguements and params
function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName)
}

fullName("Tristan", "Oshier")

// show default values

function fullNameWithDefaults(firstName="John", lastName="Doe") {
    console.log(firstName + " " + lastName)
}

fullNameWithDefaults()


// 2. -------------------------------------------------------

// maybe we want to use the data inside the function outside of it
// use a return


// show how cant use var in function (local scope)
// console.log(myFullName)

const myFullName = function fullNameWithReturn(firstName, lastName) {
    const myFullName = `${firstName} ${lastName}`
    return myFullName
}

// now myFullName can be used globally
console.log(myFullName("Tristan", "Oshier"))


// 3. -------------------------------------------------------

const fullNameArrow = (firstName, lastName) => {
    return firstName + " " + lastName
}

// only one param - you can ommit parenthesis

const onlyTheFirstName = firstName => {
    return firstName
}

// oneLine - automatic return 

const oneLineName = name => name

// 4. -------------------------------------------------------

// examples of functions above

// method example

let apples = "apples"
console.log(apples.toUpperCase())

// method is invoked by dot notation

// 5. -------------------------------------------------------

const shoppingList = ["paper towels", "shampoo", "tooth paste", "apples", "cereal", "orange juice"]

shoppingList.forEach(function(item) {
    console.log(item)
})

// with arrow function 

shoppingList.forEach(item => {
    console.log(item)
})

// you can use index parameter in callbacks
// show without + 1 at first to go over array indexing again
shoppingList.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`)
})