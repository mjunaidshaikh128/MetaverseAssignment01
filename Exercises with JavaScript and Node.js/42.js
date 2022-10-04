const magicianNames = ["Houdini", "David Copperfield", "Lance Burton"]

const show_magicians = (magicianNames) => {
    for (let magician of magicianNames) {
        console.log(magician)
    }
}

show_magicians(magicianNames);

const make_great = (magicianNames) => {
    for (let i=0; i< magicianNames.length; i++) {
        magicianNames[i] = `Great ${magicianNames[i]}`
    }
}

make_great(magicianNames)
show_magicians(magicianNames);