export const my_size_alpha = (str) => {
  let i = 0;
  while (str[i] != "\n") {
    if ( (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122 ) || (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) ) {
      return 0;
    }
    else {
      return i;
    }
  }
}

console.log(my_size_alpha("Salut"));
