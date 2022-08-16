import { useEffect, useState } from 'react';
import { Card } from 'components/Card/Card';
import { Ateam } from 'components/Teams/Ateam';
// import { Bteam } from 'components/Teams/Bteam';
import { Person, getPeople } from 'utils/swapi';

const App = () => {
  const [people, setPeople] = useState<Array<Person>>([]);
  const [teamA, setTeamA] = useState<Array<Person>>([]);
  const [teamB, setTeamB] = useState<Array<Person>>([]);

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
