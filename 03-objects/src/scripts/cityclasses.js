class City {
    constructor(name, lat, long, pop) {
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
    }

    whichSphere(city) {
        if (city.lat > 0) return `${city.name} is in the Northern Hemisphere`;
        else if (city.lat < 0) return `${city.name} is in the Southern Hemisphere`;
        else if (city.lat === 0) return `${city.name} is exactly on the Equator!`;

        else return 'Something went wrong';
    }

    getMostNorthern() {
        return this.cities[0];
    }

    getMostSouthern() {
        return this.cities[0];
    }

    getPopulation() {
        return 0;
    }

    createCity(city) {
        this.cities.push(city);
        return this.cities;
    }

    deleteCity(city) {
        
            this.cities.findIndex(() => {
                return 
            }

            )
        return this.cities;
    }
}


export { City, Community };
