export const my_display_comb = () => {
  let arr = [];
  let str = ""

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
            str = i + " " + j;
            arr = [str];
      if (j == 100) {
        j = 0;
      }
    }
  }
}


