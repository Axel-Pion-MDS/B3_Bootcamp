export const my_notation_classe = (arr) => {
  let moy = 0;

  if (arr.length == 0) {
    return 0;
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        return 0;
      }
      else {
        moy += arr[i];
      }
    }
    return (moy / arr.length);
  }
}

