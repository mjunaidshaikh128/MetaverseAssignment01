const make_album = (name, title, noOfTracks = undefined) => {
    if (noOfTracks) {
        const album = {
            artistName: name,
            albumTitle: title,
            numberOfTracks: noOfTracks
        }
        return album
    } else {
        const album = {
            artistName: name,
            albumTitle: title,
        }
        return album
    }

    }
    

console.log(make_album("Atif Aslam", "Jugnu"))
console.log(make_album("Ali Zafar", "Jhoom"))
console.log(make_album("Taylor Swift", "Love Story", 20))