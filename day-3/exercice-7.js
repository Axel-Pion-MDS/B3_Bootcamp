export const my_display_unicode = (arr) => {
  let toStr = arr.toString();
  let i = 0;
  let str = "";

  while (toStr[i] !== undefined) {
    if (toStr[i] == " " || (toStr.charCodeAt(i) >= 97 && toStr.charCodeAt(i) <= 122) || (toStr.charCodeAt(i) >= 65 && toStr.charCodeAt(i) <= 90) || (toStr.charCodeAt(i) >= 48 && toStr.charCodeAt(i) <= 57)) {
      str = str + toStr[i];
    }
    i += 1;
  }
  return str;
}
