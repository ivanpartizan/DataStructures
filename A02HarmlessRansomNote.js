function harmlessRansomNote(noteText, magazineText) {
  let noteArray = noteText.split(" ");
  let magazineArray = magazineText.split(" ");
  let magazineObj = {};

  magazineArray.forEach((word) => {
    if (!magazineObj[word]) {
      magazineObj[word] = 0;
    }
    magazineObj[word]++;
  });

  let noteIsPossible = true;
  noteArray.forEach((word) => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) {
        noteIsPossible = false;
      }
    } else {
      noteIsPossible = false;
    }
  });

  return noteIsPossible;
}

harmlessRansomNote(
  "this is a secret note for you from a secret admirer",
  "puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited"
);

// Linear Time Complexity or O (n) run time - two loops, but they are not nested
// O (n) + O (m) => O (n + m) => O (n)
