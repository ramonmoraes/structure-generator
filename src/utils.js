const countSpacesBefore = str => {
  let spacesCount = 0;
  const wordArr = str.split("");
  for (let i = 0; wordArr.length; i++) {
    if (!wordArr[i].match(/( |\s)/)) return spacesCount;
    spacesCount++;
  }
};

const isFolder = str => {
  const folderRegex = /\w+\//;
  return str.match(folderRegex) != null;
};


const TO_BE_REMOVED_CHARACTERS = ['-', '\/', '/', '\''];

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
}