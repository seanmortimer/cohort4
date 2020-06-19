class City {
  constructor(key, name, lat, long, pop) {
    this.key = key;
    this.name = name;
    this.lat = lat;
    this.long = long;
    this.pop = pop;
  }

  show() {
    return `${this.name}: Coordinates: ${this.lat}, `
      + `${this.long}, Population: ${this.pop}`;
  }

  movedIn(num) {
    this.pop += num;
  }

  movedOut(num) {
    this.pop -= num;
  }

  howBig() {
    if (this.pop > 1e5) return 'City';
    if (this.pop > 1.9e4) return 'Large town';
    if (this.pop > 999) return 'Town';
    if (this.pop > 100) return 'Village';
    if (this.pop > 0) return 'Hamlet';
    return 'Something went wrong';
  }

  whichSphere() {
    if (this.lat > 0) return 'Northern';
    if (this.lat < 0) return 'Southern';
    if (this.lat === 0) return 'Equator!';

    return 'Something went wrong';
  }
}

export default City;
