import { Person } from 'utils/swapi';

/**
 * imported Person up there because that is the object type I needed to import from utils/swapi.
 * This allows me to use Person as a type for an object that is being passed. Otherwise typescript would
 * show an error saying that it can't find the type "Person".
 *
 */
type CardProps = {
  // name: string;
  // height: string;
  // gender: string;
  // mass: string;
  /**
   * Here, this component we are setting up so that we can pass down props from the App component.
   * It's passing down an object that describes each person, and it's passing down two functions that take
   * in a person (object) as a parameter. These functions don't return anything.
   * We make this CardProps Type so that we can make sure when App component is passing down props to this
   * component, this component expects it to be passed down from the parent and their specific types.
   * If it's not exactly right, typescript will throw an error.
   */
  person: Person;
  pushTeamA: (person: Person) => void;
  pushTeamB: (person: Person) => void;
};

export const Card = ({
  // name,
  // height,
  // gender,
  // mass,
  /**
   * Here is where we pass down props as a parameter into this function component.
   * Without putting into the parameters, any code that we type in the function scope will not know what
   * it is referring to. Typescript will throw an error.
   * Also had to give these parameters a type which we already gave earlier at the top. CardProps is a type we alredy
   * made which has the object Person and two functions.
   */
  person,
  pushTeamA,
  pushTeamB
}: CardProps) => {
  return (
    <div
      className="bg-slate-800 display justify-center items-center gap-4 text-white w-auto
      p-6
      shadow-xl
      rounded-xl
      hover:scale-105
      ease-in
      duration-300
      mt-5
      "
    >
      <div className="text-[#5651e5]">{person.name}</div>
      <div>{person.height}</div>
      <div>{person.gender}</div>
      <div>{person.mass}</div>
      <div>
        <button
          onClick={() => pushTeamA(person)}
          className=" mx-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
        >
          Team A
        </button>
        <button
          onClick={() => pushTeamB(person)}
          className="mx-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
        >
          Team B
        </button>
      </div>
    </div>
  );
};
