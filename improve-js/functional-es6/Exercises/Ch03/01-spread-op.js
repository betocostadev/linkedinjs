// SPREAD OPERATOR

const person = {
    name: 'Jimmy Smith',
    age: 40,
    hairColor: 'brown',
    eyeColor: 'blue',
};

const careerData = {
    title: 'developer',
    company: 'ABC Software',
};

// Spreading:
const nameAndCareer = {
    name: person.name,
    ...careerData
}

const personWithCareerData = {
    ...person,
    ...careerData
}

console.table(nameAndCareer)
console.table(personWithCareerData)

const updateAge = {
    age: 43
}

// if we have the same key, the latest one will overwide the other.
const updatedPerson = {
    ...person,
    ...updateAge
}
console.table(updatedPerson)

const numbers = [1, 2, 3, 4, 5, 6]
const newNumbers = [
    0,
    ...numbers,
    7,
    8
]

console.log(newNumbers)
