const usernames = ["Muhammad Junaid Shaikh", "Huzaifa Abid", "Danish Ali", "admin", "Mustafa Rafiq", "Abdullah Qadri"]
const new_users = ["Ahmed Faraz", "Yahya Muneeri", "Mustafa Rafiq", "Muhammad Junaid Shaikh", "Vishesh Kumar"]

for (let user of new_users) {
    if (usernames.includes(user) || usernames.includes(user.toLowerCase()) || usernames.includes(user.toUpperCase())) {
        console.log(`The username ${user} is already in use, Please Enter a new username`)
    } else {
        console.log(`The username ${user} is available`)
    }
}
