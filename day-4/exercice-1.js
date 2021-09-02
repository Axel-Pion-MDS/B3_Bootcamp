export class My_Wallet {
  constructor(sum) {
    this.sum = sum;
  }

  get = () => {
    if (this.sum >= 0 && typeof this.sum == "number") {
      return (`${this.sum}€`);
    }
    else {
      this.sum = 0;
      return ("0€");
    }
  }

  add = (nbr) => {
    if (typeof nbr == "number" && nbr >= 0) {
      this.sum = this.sum + nbr;
      return (`you have adding ${nbr}€`);
    }
    else if (typeof nbr == "number" && nbr <= 0) {
      return ("you have adding 0€");
    }
    else {
      return Error("not is a number");
    }
  }

  remove = (nbr) => {
    let newSum = 0;
    if (typeof nbr == "number" && nbr >= 0) {
      if (nbr > this.sum) {
	newSum = this.sum;
        this.sum = 0;
	return (`you have remove ${newSum}€`);
      }
      else {
        this.sum = this.sum - nbr;
	return (`you have remove ${nbr}€`);
      }
    }
    else if (typeof nbr == "number" && nbr <= 0) {
      return ("you have remove 0€");
    }
    else {
      return Error("not is a number");
    }
  }
}
