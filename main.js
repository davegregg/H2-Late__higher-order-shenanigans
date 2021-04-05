let numbers = [3, 4, 5, 6, 7]
let pets = ["Maxmillian Golden Bullet", "Susie", "Sheba", "Gipsy", "Questionable Ethics", "Suggs"]
let users = [
    { username: "dmg", isActive: true },
    { username: "zakreid", isActive: false },
    { username: "thespoon", isActive: true },
    { username: "themoose", isActive: false },
    { username: "tonyk", isActive: true },
    { username: "romancingthestone", isActive: true },
    { username: "chrisandersoncooper", isActive: false },
    { username: "nickl" },
]

function add1 (x) {        // function statement
    return x + 1
}

let add2 = function (x) { return x + 2 } // function expression
let add3 =       (x) => { return x + 3 } // arrow function
let add4 =       (x) => x + 4            // arrow function
let add5 =        x  => x + 5            // arrow function



// FOREACH
pets.forEach((currentValue, index) => console.log(currentValue, index))

function forEach (array, doSomething) {
    for (let index = 0; index < array.length; index += 1) {
        let item = array[index]
        
        doSomething(item, index, array)
    }
}

let greetPet = pet => console.log("Hello,", pet)
forEach(pets, greetPet)
pets.forEach(greetPet)



// MAP
function map (array, doSomething) {
    let newArray = []
    for (let index = 0; index < array.length; index += 1) {
        let item = array[index]
    
        newArray.push(doSomething(item, index, array))
    }

    return newArray
}

let excitedPets = pets.map((pet) => pet + "!")
console.log(excitedPets)

let petNameLengths = pets.map(pet => pet.length)
console.log(petNameLengths)

let names = users.map(user => user.username)
console.log(names)



// SOME & EVERY
let someAreActive = users.some(user => user.isActive === true)
console.log(someAreActive)

let allAreActive = users.every(user => user.isActive === true)
console.log(allAreActive)

// FIND & FILTER
let sampleInactiveUser = users.find(user => user.isActive === false)
console.log(sampleInactiveUser)

let aPetWithALongName = pets.find(pet => pet.length > 10)
console.log(aPetWithALongName)

let inactiveUsers = users.filter(user => user.isActive === false)
console.log(inactiveUsers)

// CHAINING THEM TOGETHER IN THE "Pipeline Pattern"
let toActiveUsers = (user) => user.isActive === true
let toNamesBeginningWithT = (user) => user.username.startsWith('t')
let toUsernames = (potato) => potato.username

let namesOfActiveUsersStartingWithT = users
    .filter(toActiveUsers)
    .filter(toNamesBeginningWithT)
    .map(toUsernames)

// We could have written the above into a single FOR loop, like below.
// This is faster for computers to process,
// but slower for humans to process. There are always tradeoffs. 🤷‍♂️
let selectedUsers = []
for (let index = 0; index < users.length; index += 1) {
    let user = users[index]
    if (user.isActive && user.username.startsWith('t')) {
        selectedUsers.push(user.username)
    }
}

console.log(namesOfActiveUsersStartingWithT)
console.log(selectedUsers)



// REDUCE
//   [ 3,        4,        5,         6,         7]
// 0 + 3 -> 3  + 4 -> 7  + 5 -> 12  + 6 -> 18  + 7 -> 25
// ^Starting Value!

let sum = numbers.reduce((x, y) => x + y, 0)
let product = numbers.reduce((x, y) => x * y, 1)
let petNames = pets.reduce((acc, name) => acc + "," + name, "")

console.log(sum, product)
console.log(petNames)

let letterCounts = pets.reduce((counts, name) => {
    let firstLetter = name[0]
    if (counts[firstLetter] === undefined) {
        counts[firstLetter] = 0
    }
    counts[firstLetter] += 1
    return counts
}, {}) // NOTICE that our starting value is an empty object!

console.log(letterCounts)