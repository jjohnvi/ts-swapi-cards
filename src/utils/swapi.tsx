export const getPeople = async (): Promise<Array<Person>> => {
  // const response = await axios.get('https://swapi.dev/api/people');
  /**
   * asynchronous functions:
   * asynchronous functions is a function that takes some time, which usually involved a promise.
   * Having the async before the parameter makes it so that you can use the word await in the call to a function that returns
   * a promise. Doing this makes it so that the code waits until the promise is fulfilled. (Fulfilled value).
   * Promise means getting a value fulfilled will take time. Await makes sure that nothing else happens until it is fulfilled.
   * A Promise also needs a type. In this case, a promise will return an array, which has objects.
   * I looked at the console.log and it showed that response.data was actually an object which has key value pairs, with number, null, string, and another array.
   * Because the response.data was not an array, I typed response.data.results and returned that hence why
   * I typed "Promise<Array<Person>>". Because response.data.results is an Array that has objects that describe a person.
   */

  const responseData = {
    count: 82,
    next: 'https://swapi.dev/api/people/?page=2',
    previous: null,
    results: [
      {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [
          'https://swapi.dev/api/films/1/',
          'https://swapi.dev/api/films/2/',
          'https://swapi.dev/api/films/3/',
          'https://swapi.dev/api/films/6/'
        ],
        species: [],
        vehicles: [
          'https://swapi.dev/api/vehicles/14/',
          'https://swapi.dev/api/vehicles/30/'
        ],
        starships: [
          'https://swapi.dev/api/starships/12/',
          'https://swapi.dev/api/starships/22/'
        ],
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-20T21:17:56.891000Z',
        url: 'https://swapi.dev/api/people/1/'
      },
      {
        name: 'C-3PO',
        height: '167',
        mass: '75',
        hair_color: 'n/a',
        skin_color: 'gold',
        eye_color: 'yellow',
        birth_year: '112BBY',
        gender: 'n/a',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [
          'https://swapi.dev/api/films/1/',
          'https://swapi.dev/api/films/2/',
          'https://swapi.dev/api/films/3/',
          'https://swapi.dev/api/films/4/',
          'https://swapi.dev/api/films/5/',
          'https://swapi.dev/api/films/6/'
        ],
        species: ['https://swapi.dev/api/species/2/'],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:10:51.357000Z',
        edited: '2014-12-20T21:17:50.309000Z',
        url: 'https://swapi.dev/api/people/2/'
      },
      {
        name: 'R2-D2',
        height: '96',
        mass: '32',
        hair_color: 'n/a',
        skin_color: 'white, blue',
        eye_color: 'red',
        birth_year: '33BBY',
        gender: 'n/a',
        homeworld: 'https://swapi.dev/api/planets/8/',
        films: [
          'https://swapi.dev/api/films/1/',
          'https://swapi.dev/api/films/2/',
          'https://swapi.dev/api/films/3/',
          'https://swapi.dev/api/films/4/',
          'https://swapi.dev/api/films/5/',
          'https://swapi.dev/api/films/6/'
        ],
        species: ['https://swapi.dev/api/species/2/'],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:11:50.376000Z',
        edited: '2014-12-20T21:17:50.311000Z',
        url: 'https://swapi.dev/api/people/3/'
      },
      {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        hair_color: 'none',
        skin_color: 'white',
        eye_color: 'yellow',
        birth_year: '41.9BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [
          'https://swapi.dev/api/films/1/',
          'https://swapi.dev/api/films/2/',
          'https://swapi.dev/api/films/3/',
          'https://swapi.dev/api/films/6/'
        ],
        species: [],
        vehicles: [],
        starships: ['https://swapi.dev/api/starships/13/'],
        created: '2014-12-10T15:18:20.704000Z',
        edited: '2014-12-20T21:17:50.313000Z',
        url: 'https://swapi.dev/api/people/4/'
      },
      {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        hair_color: 'brown',
        skin_color: 'light',
        eye_color: 'brown',
        birth_year: '19BBY',
        gender: 'female',
        homeworld: 'https://swapi.dev/api/planets/2/',
        films: [
          'https://swapi.dev/api/films/1/',
          'https://swapi.dev/api/films/2/',
          'https://swapi.dev/api/films/3/',
          'https://swapi.dev/api/films/6/'
        ],
        species: [],
        vehicles: ['https://swapi.dev/api/vehicles/30/'],
        starships: [],
        created: '2014-12-10T15:20:09.791000Z',
        edited: '2014-12-20T21:17:50.315000Z',
        url: 'https://swapi.dev/api/people/5/'
      },
      {
        name: 'Owen Lars',
        height: '178',
        mass: '120',
        hair_color: 'brown, grey',
        skin_color: 'light',
        eye_color: 'blue',
        birth_year: '52BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [
          'https://swapi.dev/api/films/1/',
          'https://swapi.dev/api/films/5/',
          'https://swapi.dev/api/films/6/'
        ],
        species: [],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:52:14.024000Z',
        edited: '2014-12-20T21:17:50.317000Z',
        url: 'https://swapi.dev/api/people/6/'
      },
      {
        name: 'Beru Whitesun lars',
        height: '165',
        mass: '75',
        hair_color: 'brown',
        skin_color: 'light',
        eye_color: 'blue',
        birth_year: '47BBY',
        gender: 'female',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [
          'https://swapi.dev/api/films/1/',
          'https://swapi.dev/api/films/5/',
          'https://swapi.dev/api/films/6/'
        ],
        species: [],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:53:41.121000Z',
        edited: '2014-12-20T21:17:50.319000Z',
        url: 'https://swapi.dev/api/people/7/'
      },
      {
        name: 'R5-D4',
        height: '97',
        mass: '32',
        hair_color: 'n/a',
        skin_color: 'white, red',
        eye_color: 'red',
        birth_year: 'unknown',
        gender: 'n/a',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: ['https://swapi.dev/api/films/1/'],
        species: ['https://swapi.dev/api/species/2/'],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:57:50.959000Z',
        edited: '2014-12-20T21:17:50.321000Z',
        url: 'https://swapi.dev/api/people/8/'
      },
      {
        name: 'Biggs Darklighter',
        height: '183',
        mass: '84',
        hair_color: 'black',
        skin_color: 'light',
        eye_color: 'brown',
        birth_year: '24BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: ['https://swapi.dev/api/films/1/'],
        species: [],
        vehicles: [],
        starships: ['https://swapi.dev/api/starships/12/'],
        created: '2014-12-10T15:59:50.509000Z',
        edited: '2014-12-20T21:17:50.323000Z',
        url: 'https://swapi.dev/api/people/9/'
      },
      {
        name: 'Obi-Wan Kenobi',
        height: '182',
        mass: '77',
        hair_color: 'auburn, white',
        skin_color: 'fair',
        eye_color: 'blue-gray',
        birth_year: '57BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/20/',
        films: [
          'https://swapi.dev/api/films/1/',
          'https://swapi.dev/api/films/2/',
          'https://swapi.dev/api/films/3/',
          'https://swapi.dev/api/films/4/',
          'https://swapi.dev/api/films/5/',
          'https://swapi.dev/api/films/6/'
        ],
        species: [],
        vehicles: ['https://swapi.dev/api/vehicles/38/'],
        starships: [
          'https://swapi.dev/api/starships/48/',
          'https://swapi.dev/api/starships/59/',
          'https://swapi.dev/api/starships/64/',
          'https://swapi.dev/api/starships/65/',
          'https://swapi.dev/api/starships/74/'
        ],
        created: '2014-12-10T16:16:29.192000Z',
        edited: '2014-12-20T21:17:50.325000Z',
        url: 'https://swapi.dev/api/people/10/'
      }
    ]
  };
  // console.log(response.data.results);
  // return response.data.results;
  return responseData.results;
};

//interface type is specifically or objects for typescript.

/**
 * Have to type out every key value types for every object.
 * PeopleInfo is a type we called the object and in there we have keys that have a certain data type such as number, string, null, boolean, or another object or array.
 * The Array type is a special type where you can determine the type of array by putting that type within `<>`. e.g. Array<whatever>
 * In this case, the results property is an array of Person objects. We call this object type Person.
 * So now this array will be filled with only objects that describe the properties of a person.
 * What's next? Now we have to make another object type through typescript syntax, describing the properties of a person.
 */

export type PeopleInfo = {
  count: number;
  next: string;
  previous: null;
  results: Array<Person>;
};

export type Person = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: Array<string>;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: Array<string>;
  starships: Array<string>;
  url: string;
  vehicles: Array<string>;
};
