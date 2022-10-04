const animals = ["Dog", "Cat", "Parrots"]

for (let animal of animals) {
    if (animal === "Dog") {
        console.log("Dogs are good as a Pet animal")
    } else if (animal === "Cat") {
        console.log("Cats are the cutest animal on earth")
    } else {
        console.log("Parrots make you happy when feeling low")
    }
}

console.log(`\n\n ${animals[0]}, ${animals[1]}, ${animals[2]} all live on land, all are acceptable and favoured as a pet, Any of these animals would make a great pet!`)