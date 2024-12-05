// Step 1: Import express and create your app instance [1 pt]
// Make sure to install express in the Terminal as well


// DO LAST: Feel free to add a fun fact for yourself and your friends (please keep it school appropriate)
let classData = {
    pictureUrl: "https://i.imgur.com/skFjC1y.jpeg",
    section1: [
        { name: "Akolade Ajibola", funFact: "" },
        { name: "Oscar Altamirano", funFact: "" },
        { name: "John Alvarez-Solano", funFact: "" },
        { name: "Yariel Beato", funFact: "" },
        { name: "Zyaire Dowe", funFact: "" },
        { name: "Sandrea Edwards", funFact: "" },
        { name: "Denisse Gonzalez", funFact: "" },
        { name: "Rakeem Grace", funFact: "" },
        { name: "Jamari Greene", funFact: "" },
        { name: "Cesar Hernandez", funFact: "" },
        { name: "Jayden James", funFact: "" },
        { name: "Adam Osorio-Castillo", funFact: "" },
        { name: "Osiris Purandah", funFact: "" },
        { name: "Annmary Quinones", funFact: "" },
        { name: "Yineiri Reyes Cepeda", funFact: "" },
        { name: "Sophia Rivera", funFact: "" },
        { name: "Christian Rojas", funFact: "" },
        { name: "Monica Rosales Hernandez", funFact: "" },
        { name: "Eduardo Santos", funFact: "" },
        { name: "Corey Span", funFact: "" },
        { name: "Jayson Sprouse", funFact: "" },
        { name: "Jaroly Vidal-Diaz", funFact: "" }
      ],
    section2: [
        { name: "Miriam Clemente", funFact: "" },
        { name: "Jose Corniel", funFact: "" },
        { name: "Marlon Cruz-Estevez", funFact: "" },
        { name: "Kevin DeJesus", funFact: "" },
        { name: "Jazlynn Denis-Mack", funFact: "" },
        { name: "Angel Felix Martinez", funFact: "" },
        { name: "Mahamadou Fofana", funFact: "" },
        { name: "Abigail Foggarthy", funFact: "" },
        { name: "Joel Frimpong", funFact: "" },
        { name: "Chelsea-Taylor Moore", funFact: "" },
        { name: "Liana Ortiz", funFact: "" },
        { name: "John Polonia", funFact: "" },
        { name: "Christian Ramirez", funFact: "" },
        { name: "Emanuel Ramirez", funFact: "" },
        { name: "Laila Springer", funFact: "" },
        { name: "Brandon Thomas", funFact: "" },
        { name: "Ayden Wynter", funFact: "" },
        { name: "Jason Zhu", funFact: "" }
      ]
}

function getRandomIndex(sectionNumber){
  if (sectionNumber === 1){
    return Math.floor(Math.random() * data.section1.length);
  } else if (sectionNumber === 2) {
    return Math.floor(Math.random() * data.section2.length);
  } else {
    throw new Error("Invalid section number. Please enter 1 or 2 for a random index.")
  }
}

// Step 2: Scroll to the bottom (scroll down!)
// The server should be running before you go to Step 3

// Step 3: Add a GET route handler for / that sends back "Welcome to the SE12 API!" [1 pt]
// Extra credit if you use HTML to make the text an h1 and display the image under the pictureUrl key


// Step 4: Add a GET route handler for /api/bestStudent that sends back the student object with your name and fun fact as a JSON [2 pt]


// Step 5: Add a GET route handler for /api/randomStudent that sends back a random student from your section as a JSON [2 pt]
// Call getRandomIndex(1) or getRandomIndex(2) to get a random index for your section


// Step 6: Add a GET route handler for /docs that sends back "Go to /api/bestStudent or /api/randomStudent to learn about SE12 students" [1 pt]


// Step 2: Start your server on port 3000 [1 pt]


