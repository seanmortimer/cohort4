class City {
    constructor(key, name, lat, long, pop) {
        this.key = key;
        this.name = name;
        this.lat = lat;
        this.long = long;
        this.pop = pop;
    }

    show() {
        return `${this.name}: Coordinates: ${this.lat}, ` +
            `${this.long}, Population: ${this.pop}`;
    }

    movedIn(num) {
        return this.pop += num;
    }

    movedOut(num) {
        return this.pop -= num;
    }

    howBig() {
        if (this.pop > 1e5) return 'City';
        else if (this.pop > 1.9e4) return 'Large town';
        else if (this.pop > 999) return 'Town';
        else if (this.pop > 100) return 'Village';
        else if (this.pop > 0) return 'Hamlet';

        else return 'Something went wrong';

    }
}

class Community {
    constructor() {
        this.cities = [];
        this.key = 0;
    }

    newKey() {
        return ++this.key;
    }

    findByKey(key) {
        return this.cities.find(city => city.key === key);
    }

    whichSphere(key) {
        const city = this.findByKey(key);
        if (city.lat > 0) return 'Northern';
        else if (city.lat < 0) return 'Southern';
        else if (city.lat === 0) return 'Equator!';

        else return 'Something went wrong';
    }

    getMostNorthern() {
        let northMost = {};
        northMost = this.cities[0];
        this.cities.forEach(city => {
            if (city.lat > northMost.lat) northMost = city;
        });
        return northMost;
    }

    getMostSouthern() {
        let southMost = {};
        southMost = this.cities[0];
        this.cities.forEach(city => {
            if (city.lat < southMost.lat) southMost = city;
        });
        return southMost;
    }

    getPopulation() {
        const totalPop = this.cities.reduce((acc, city) => acc += city.pop, 0);
        return totalPop;
    }

    createCity(name, lat, long, pop, key) {
        if (key === undefined) {
            // console.log('No key found');
            key = this.newKey();
        }
        if (this.key < key) {
            this.key = key;
            // console.log('Key found:', key);
        }

        const city = new City(key, name, lat, long, pop);
        this.cities.push(city); 
        return key;
    }

    deleteCity(key) {
        const index = this.cities.findIndex(city => city.key === key);
        return this.cities.splice(index, 1);
    }
}


export { City, Community };
