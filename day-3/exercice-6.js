export const my_display_combv2 = () => {
  let array = [];
  let str = "";
  
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (j == 10) {
        j = 0;
      }
      for (let k = 0; k < 10; k++) {
	if (k == 10) {
          k = 0;
	}
	if (i != j && i != k && j != k) {
	  str = i + " " + j + " " + k
          array = [str];
	}
      }
    }
  }
  return array;
}
