
function sandwiches(...items) {
    console.log("Summary of Items for Sandwich")
    for (let i=0; i < items.length; i++) {
        console.log(items[i])
    }
}

sandwiches("Lettuce", "Tomatoes")
sandwiches("Lettuce", "Tomatoes", "Chicken")
sandwiches("Lettuce", "Tomatoes", "Chicken", "Olives", "Mushrooms")