let favPizzas = ["Pepperoni", "Fajita", "Chicken Supreme"]

for (let pizza of favPizzas) {
    if (pizza === "Fajita") {
        console.log("I really like Fajita Flavor")
    } else if (pizza === "Pepperoni") {
        console.log("Pepperoni's on Pizza, A killer combination")
    } else {
        console.log("Chicken Supreme is the supreme pizza of all!")
    }
}

console.log(`\n\n Pizza's are a staple food of Italy, and has gained worldwide popularity due to its taste, ${favPizzas[1]} is the Pakistani touch to pizza. Although ${favPizzas[0]} are liked by few, ${favPizzas[2]} is a universal favorite. I really love Pizzas!`)