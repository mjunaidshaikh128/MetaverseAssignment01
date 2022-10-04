guestList = ["Ahmed Noor Shaikh", "Khadija Shaikh", "Huzaifa Abid"]

for (let guest of guestList) {
    console.log(`Dear ${guest}, we would like you to invite you to Dinner tonight, your presence will be appreciated`)
}

console.log(`\n\nSorry to hear ${guestList[1]} you wont be able to make it to our Dinner\n\n`)

guestList[1] = "Zain Khan"
for (let guest of guestList) {
    console.log(`Dear ${guest}, we would like you to invite you to Dinner tonight, your presence will be appreciated`)
}

console.log(`\n\nGreat news! we have found a bigger dining table\n\n`)
guestList.unshift("Jaweria Jawaid") //add at the start of the array

guestList.splice(2, 0, "Shamim Shaikh") //add item in the middle of the array

guestList.push("Rida Shaikh") //add item to the end of your list

for (let guest of guestList) {
    console.log(`Dear ${guest}, we would like you to invite you to Dinner tonight, your presence will be appreciated`)
}