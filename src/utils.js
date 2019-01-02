function countSpacesBefore(str) {
  let spacesCount = 0;
  const wordArr = str.trimEnd().split('');
  if (wordArr.length === 0) return 0;

  for (let i = 0; wordArr.length; i += 1) {
    if (wordArr[i] && !wordArr[i].match(/( |\s)/)) return spacesCount;
    spacesCount += 1;
  }

  return spacesCount;
}

const TO_BE_REMOVED_CHARACTERS = ['-', '/', '/', "'"];

function cleanName(str) {
  let cleanedString = str;
  TO_BE_REMOVED_CHARACTERS.forEach((rule) => {
    cleanedString = cleanedString.replace(rule, '');
  });

  return cleanedString.trim();
}

module.exports = {
  countSpacesBefore,
  cleanName,
};
