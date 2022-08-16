import { useEffect, useState } from 'react';
import { Card } from 'components/Card/Card';
import { Ateam } from 'components/Teams/Ateam';
// import { Bteam } from 'components/Teams/Bteam';
import { Person, getPeople } from 'utils/swapi';

const App = () => {
  // Hooks allows me to set a state of a certain data type in a simple way with a set function particularly dedicated to that state created. They come in a pair and the 'set' function only exists to set State for that state only. useState is where you set the initial data for that state.
  const [people, setPeople] = useState<Array<Person>>([]); // Typescript is necessary here because the state has a data type. This data type is an array which holds multiple data types of what I called person. The reason why those arrow brackets are there because inside the array are objects of strings which describe a person.
  const [teamA, setTeamA] = useState<Array<Person>>([]);
  const [teamB, setTeamB] = useState<Array<Person>>([]);

  /**
   *pushTeamA explanation.
   *Here we have a function that takes in a parameter of an object. I have it set up like this because
   *I have a setState for TeamA which is an array that takes in objects.
   *Each object will describe a person. All of those data types for each property will be strings. 
   *Function type is void because it is not returning anything.
   *I used filter because it will go through an array I already filled with a promise which is filled with objects 
   *that describe each person. I need to get rid of the object I pick with the certain name from the state and
   push that object into another array which is a team array. So whichever I put in the parameter, it will return a new
   array with the objects that does not match the name picked picked. Now the array is one object short and a team
   has a new person, whichever team that is. 
   Have to use setTeamA and setPeople because that's the only way to change state. 
   */
  const pushTeamA = (person: Person): void => {
    const newPeople = people.filter((human) => {
      return human.name != person.name;
    });
    setTeamA([...teamA, person]);
    setPeople(newPeople);
    // let index = people.findIndex((person) => person.name == name);
    // const spliced = people.splice(index, 1);
    // teamA.push(name);
    // console.log(people);
    // setPeople(people.map((person) => person));
  };

  const pushTeamB = (person: Person): void => {
    const newPeople = people.filter((human) => {
      return human.name != person.name;
    });
    setTeamB([...teamB, person]);
    setPeople(newPeople);
  };

  const fetchPeople = async (): Promise<void> => {
    const results = await getPeople();
    setPeople(results);
  };

  useEffect(() => {
    void fetchPeople();
  }, []);

  console.log(people);
  console.log(teamA);

  return (
    <div className="display justify-center flex min-h-screen bg-gray-900 gap-10 mx-72">
      <Ateam title="Team A" team={teamA} />
      <div className="grid grid-cols-1">
        {people.map((person) => {
          return (
            <div key={person.name}>
              <Card
                // name={person.name}
                // height={person.height}
                // gender={person.gender}
                // mass={person.mass}
                person={person}
                pushTeamA={pushTeamA}
                pushTeamB={pushTeamB}
              />
            </div>
          );
        })}
      </div>
      <Ateam title="Team B" team={teamB} />
    </div>
  );
};

export default App;
