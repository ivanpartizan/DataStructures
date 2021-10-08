function harmlessRansomNote(noteText, magazineText) {
  let magazineWords = magazineText.split(" ");
  for (let noteWord of noteText) {
    if (magazineWords.includes(noteWord)) {
      return true;
    }
  }
}

harmlessRansomNote(
  "my job is to teach you something",
  "your job is to learn something"
);
