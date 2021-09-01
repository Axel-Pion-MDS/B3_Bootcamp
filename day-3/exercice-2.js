export const my_size_alpha = (str) => {
  let i = 0;
  let result = 0;
  if (str == null || typeof str !== "string") {
    return 0;
  }
  else {
    while (str[i] !== undefined) {
      i = i + 1;
    }
  }
  return i;
}
