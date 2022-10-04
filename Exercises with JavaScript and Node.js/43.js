const magicianNames = ["Houdini", "David Copperfield", "Lance Burton"]

const show_magicians = (magicianNames) => {
    for (let magician of magicianNames) {
        console.log(magician)
    }
}

show_magicians(magicianNames);
const unChangedMagicians = magicianNames.slice()
console.log(unChangedMagicians)

const make_great = (unChangedMagicians) => {
    for (let i=0; i< unChangedMagicians.length; i++) {
        unChangedMagicians[i] = `Great ${unChangedMagicians[i]}`
    }
}

make_great(unChangedMagicians)
show_magicians(magicianNames);
show_magicians(unChangedMagicians);