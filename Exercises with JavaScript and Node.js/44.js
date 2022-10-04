
function sandwiches() {
    console.log("Summary of Items for Sandwich")
    for (let i=0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}

sandwiches("Lettuce", "Tomatoes")
sandwiches("Lettuce", "Tomatoes", "Chicken")
sandwiches("Lettuce", "Tomatoes", "Chicken", "Olives", "Mushrooms")