export const my_array_alpha = (str) => {
  let i = 0;
  let tab = [];
  if (str == null || typeof str !== "string") {
    return 0;
  }
  else {
    while (str[i] !== undefined) {
      tab[i] = str[i];
      i += 1;
    }
  }
  return tab;
}
