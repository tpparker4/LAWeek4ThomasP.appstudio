let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']

let withSal = petNames

console.log(withSal.push('Sal'))

console.log(withSal)

console.log(`The third pet is named ${withSal[2]}.`)

console.log(`The array has ${petNames.length} names in it.`)

withSal = withSal.pop()

console.log(withSal)