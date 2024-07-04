const guests = {
    ANTONY: {
      title: "General",
      region: "Rome",
      dietaryPreference: "Vegetarian",
      pastGifts: ["Golden Laurel", "Chariot"]
    },
    CICERO: {
      title: "Orator",
      region: "Arpinum",
      dietaryPreference: "Omnivore",
      pastGifts: ["Scroll of Proverbs", "Quill"]
    },
  
};

guests.BRUTUS = { // added BRUTUS info to guests profile
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
  };
  
  guests.CICERO.pastGifts.push("Golden Lyre") // Updated CICERO past gifts and  added  "Golden Lyre".

  const antonyRegion=guests.ANTONY.region;  // assigned anatony region to variable antonyRegion

  delete guests.CICERO; // removed CICERO from gusts list
 const generalProfile = guests.ANTONY.region="Egypt";// assigned antonyRegion new reign to variable generalProfile

console.log("🚀 ~ guests:", guests)
