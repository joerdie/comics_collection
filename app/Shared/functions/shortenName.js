export function shortenName(fullName, maxLength) {
  let returnFullName = fullName;
  //limit a name to a certain num of chars and add 3 dots if the name is too long
  if (returnFullName != "" && returnFullName != undefined) {
    if (returnFullName.length > maxLength) {
      returnFullName = returnFullName.substring(maxLength, 0);
      returnFullName = `${returnFullName}...`
    }
  }
  return returnFullName;
}
