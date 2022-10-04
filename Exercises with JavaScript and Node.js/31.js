const usernames = ["Muhammad Junaid Shaikh", "Huzaifa Abid", "Danish Ali", "admin", "Mustafa Rafiq", "Abdullah Qadri"]
while (usernames.length > 0) {
    usernames.pop();
}

if (usernames.length === 0) {
    console.log("We need to find some users!")
} else {
    for (let username of usernames) {
        if (username === "admin") {
            console.log(`Hello ${username}, would you like to see a status report?`)
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`)
        }
    }
}