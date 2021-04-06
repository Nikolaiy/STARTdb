export default class SwapiService {

    __baseUrl = 'https://swapi.dev/api/';
    __baseImages = 'https://starwars-visualguide.com/assets/img/'

    getInformation = async (url) => {
        const res = await fetch(`${this.__baseUrl}${url}`);
        if (!res.ok) {
            console.error(`Cannot loading url ${this.__baseUrl}${url}` + `result code ${res.status}`)
        }
        return await res.json()
    };

    getAllPeople = async () => {
        const res = await this.getInformation('people');
        return res.results.map(this.__transformPeople)
    };

    getPeople = async (id) => {
        const people = await this.getInformation(`people/${id}`);
        return this.__transformPeople(people)
    };

    getAllPlanet = async () => {
        const res = await this.getInformation('planets');
        return res.results.map(this.__transformPlanet)
    };

    getPlanet = async (id) => {
        const planet = await this.getInformation(`planets/${id}`);
        return this.__transformPlanet(planet)
    };

    getAllStarship = async () => {
        const res = await this.getInformation('starships');
        return res.results.map(this.__transformStarship)
    };

    getStarship = async (id) => {
        const starship = await this.getInformation(`starships/${id}`);
        return this.__transformStarship(starship)
    };

    getImagePeople = (id) => {
        return `${this.__baseImages}characters/${id}.jpg`
    };

    getImagePlanet = (id) => {
        return `${this.__baseImages}planets/${id}.jpg`
    };

    getImageStarship = (id) => {
        return `${this.__baseImages}starships/${id}.jpg`
    };

    __getId = (item) => {
        const idRegEx = /\/([0-9]*)\/$/;
        return item.url.match(idRegEx)[1]
    };

    __transformPlanet = (planet) => {
        return {
            id: this.__getId(planet),
            name: planet.name,
            population: planet.population,
            diameter: planet.diameter,
            rotationPeriod: planet.rotation_period
        }
    };

    __transformPeople = (people) => {
        return {
            id: this.__getId(people),
            name: people.name,
            gender: people.gender,
            birthYear: people.birth_year,
            height: people.height,
            mass: people.mass
        }
    };

    __transformStarship = (starships) => {
        return {
            id: this.__getId(starships),
            name: starships.name,
            model: starships.model,
            manufacturer: starships.manufacturer,
            length: starships.length,
            passengers: starships.passengers,
            costInCredits: starships.cost_in_credits,
            crew: starships.crew,
            cargo: starships.cargo_capacity,
        }
    };

}
