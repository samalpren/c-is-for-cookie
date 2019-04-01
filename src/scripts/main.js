//  C IS FOR COOKIE

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let y = 1; y < cookies.length; y++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
};

// CONJUNCTION JUNCTION

const conjunction = function (firstWord, secondWord) {
  conjoinedWord = `${firstWord} ${secondWord}`
}

conjunction("Master", "Card")
console.log(conjoinedWord)

//  MOD SQUAD

let HTMLRepresentation = `<h1>The Mod Squad</h1>`

{
  const ModSquad = {
      "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
      "series": {
          "start": "1968",
          "end": "1973",
      },
  }

  ModSquad.members.forEach(member => {
      HTMLRepresentation += `<div>${member}</div>`
  })
}

document.querySelector(".show-info").innerHTML = HTMLRepresentation

//   SIMON SAYS

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let invalidLocation = true
let i = 0;

for (let k = 0; k < locations.length; k++) {
    let currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        invalidLocation = true
    }

    if (invalidLocation[i]) {
        console.log("This location is invalid")
    }
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${i} invalid locations`)
