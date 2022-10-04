function cars(manufacturerName, modelName) {
    const Car = {
        manufacturer: manufacturerName,
        model: modelName 
    }
    console.log(Car)
}

cars("Toyota", "Corolla", {Color: "Yellow"})