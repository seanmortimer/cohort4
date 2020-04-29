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

    whichSphere(city) {
        if (city.lat > 0) return `${city.name} is in the Northern Hemisphere`;
        else if (city.lat < 0) return `${city.name} is in the Southern Hemisphere`;
        else if (city.lat === 0) return `${city.name} is exactly on the Equator!`;

        else return 'Something went wrong';
    }

    getMostNorthern() {
        let northMost = {};
        northMost.lat = -181;
        this.cities.forEach(city => {
            if (city.lat > northMost.lat) northMost = city; 
        });
        return northMost;
    }

    getMostSouthern() {
        let southMost = {};
        southMost.lat = 181;
        this.cities.forEach(city => {
            if (city.lat < southMost.lat) southMost = city; 
        });
        return southMost;
    }

    getPopulation() {
        const totalPop = this.cities.reduce((acc, city) => acc += city.pop,0);
        return totalPop;
    }

    createCity(city) {
        this.cities.push(city);
        return this.cities;
    }

    deleteCity(city) {
        const target = this.cities.findIndex((delCity => delCity === city));
        this.cities.splice(target, 1);
        return this.cities;
    }

    newKey() {
        return ++this.key;
    }
}


export { City, Community };
