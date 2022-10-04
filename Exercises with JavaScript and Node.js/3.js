const person = "Muhammad Junaid Shaikh"
console.log(person.toUpperCase(), person.toLowerCase())

String.prototype.toTitleCase = function() {
    const individualWords = this.toLowerCase().split(" ")
    for (let i=0; i< individualWords.length; i++) {
        individualWords[i] = `${individualWords[i][0].toUpperCase()}${individualWords[i].slice(1)}`
    }
    let joined = individualWords.join(" ")
    return joined
}