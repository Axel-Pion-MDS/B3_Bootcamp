export class My_Wallet {
  constructor(sum) {
    this.sum = sum;
  }

  get = () => {
    return (this.sum >= 0 ? `${this.sum}€` : "0€");
  }

  add = (nbr) => {
    if (typeof nbr == "number" && nbr >= 0) {
      this.sum = this.sum + nbr;
      return (`you have added ${nbr}€`);
    }
    else if (typeof nbr == "number" && nbr <= 0) {
      return ("you have added 0€");
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
	return (`you have removed ${newSum}€`);
      }
      else {
        this.sum = this.sum - nbr;
	return (`you have removed ${nbr}€`);
      }
    }
    else if (typeof nbr == "number" && nbr <= 0) {
      return ("you have removed 0€");
    }
    else {
      return Error("not is a number");
    }
  }
}
