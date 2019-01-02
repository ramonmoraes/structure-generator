const countSpacesBefore = str => {
  let spacesCount = 0;
  const wordArr = str.trimEnd().split("");
  if (wordArr.length == 0) return 0;
  
  for (let i = 0; wordArr.length; i++) {
    if (wordArr[i] && !wordArr[i].match(/( |\s)/)) return spacesCount;
    spacesCount++;
  }
};

const ENDING_WITH_SLASH_REGEX = /\w+\//;
const isFolder = (str, folderRegex = ENDING_WITH_SLASH_REGEX) => {
  return str.match(folderRegex) != null;
};

const TO_BE_REMOVED_CHARACTERS = ["-", "/", "/", "'"];

const cleanName = str => {
  let cleanedString = str;
  TO_BE_REMOVED_CHARACTERS.forEach(
    rule => (cleanedString = cleanedString.replace(rule, ""))
  );
  return cleanedString.trim();
};

module.exports = {
  countSpacesBefore,
  isFolder,
  cleanName
};
