import City from './cityClass';

class Community {
  constructor() {
    this.cities = [];
    this.key = 0;
  }

  newKey() {
    return ++this.key;
  }

  findByKey(key) {
    return this.cities.find((city) => city.key === key);
  }

  getMostNorthern() {
    // let northMost = {};
    let [northMost] = this.cities;
    // northMost = this.cities[0];
    this.cities.forEach((city) => {
      if (city.lat > northMost.lat) northMost = city;
    });
    return northMost;
  }

  getMostSouthern() {
    let [southMost] = this.cities;
    // southMost = this.cities[0];
    this.cities.forEach((city) => {
      if (city.lat < southMost.lat) southMost = city;
    });
    return southMost;
  }

  getPopulation() {
    // const totalPop = this.cities.reduce((acc, city) => acc += city.pop, 0);
    const totalPop = this.cities.reduce((acc, city) => acc + city.pop, 0);
    return totalPop;
  }

  createCity(city) {
    const { name, lat, long, pop } = city;
    let { key } = city;
    if (!key) key = this.newKey();
    if (this.key < key) this.key = key;

    this.cities.push(new City(key, name, lat, long, pop));
    return this.cities[this.cities.length - 1];
  }

  deleteCity(key) {
    const index = this.cities.findIndex((city) => city.key === key);
    return this.cities.splice(index, 1);
  }
}


export default Community;
