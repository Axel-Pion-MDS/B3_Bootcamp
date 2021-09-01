export const my_display_combv2 = () => {
  let array = [];
  let toStr = "";
  let str = "";
  let newArray = [];
  let l = 0;

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
          array = [i, j, k];
	  toStr = array.toString();
	  console.log(array, toStr);
	  while (toStr[l] !== undefined) {
	    if (toStr[l] != ",") {
		str = str + toStr[l]
	   	newArray = [str];
		console.log("newArray: " + newArray);
	    }
	  }
	}
      }
    }
  }
  return array;
}

my_display_combv2();
