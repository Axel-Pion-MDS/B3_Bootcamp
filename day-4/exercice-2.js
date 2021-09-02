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

console.log(my_notation_classe([12, 14, 16.5, 20, 17.5]));
console.log(my_notation_classe([5, 10, "lol", 150, 20]));
console.log(my_notation_classe([]))
