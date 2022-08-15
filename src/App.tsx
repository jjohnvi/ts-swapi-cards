import { useEffect, useState } from 'react';
import { Card } from 'components/Card/Card';
import { Ateam } from 'components/Teams/Ateam';
import { Bteam } from 'components/Teams/Bteam';
import { Person, getPeople } from 'utils/swapi';

const App = () => {
  const [people, setPeople] = useState<Array<Person>>([]);
  const [teamA, setTeamA] = useState<Array<string>>([]);
  const [teamB, setTeamB] = useState<Array<string>>([]);

  const pushTeamA = (name: string): void => {
    const newPeople = people.filter((person) => {
      return person.name != name;
    });
    setTeamA([...teamA, name]);
    setPeople(newPeople);
    // let index = people.findIndex((person) => person.name == name);
    // const spliced = people.splice(index, 1);
    // teamA.push(name);
    // console.log(people);
    // setPeople(people.map((person) => person));
  };

  const pushTeamB = (name: string): void => {
    const newPeople = people.filter((person) => {
      return person.name != name;
    });
    setTeamB([...teamB, name]);
    setPeople(newPeople);
  };

  const fetchPeople = async (): Promise<void> => {
    const results = await getPeople();
    setPeople(results);
  };

  useEffect(() => {
    void fetchPeople();
  }, []);

  return (
    <div className="display justify-center flex min-h-screen bg-gray-900 gap-10 mx-72">
      <Ateam team={teamA} />
      <div className="grid grid-cols-1">
        {people.map((person) => {
          return (
            <div key={person.name}>
              <Card
                name={person.name}
                height={person.height}
                gender={person.gender}
                mass={person.mass}
                pushTeamA={pushTeamA}
                pushTeamB={pushTeamB}
              />
            </div>
          );
        })}
      </div>
      <Bteam team={teamB} />
    </div>
  );
};

export default App;
