import { Person } from 'utils/swapi';

type TeamProps = {
  team: Array<Person>;
  title: string;
};

export const Ateam = ({ team, title }: TeamProps) => {
  return (
    <div>
      <div>{title}</div>
      {team.map((person) => (
        <div
          className="bg-slate-800 justify-center items-center gap-4 text-white w-auto
        p-6
        shadow-xl
        rounded-xl
        hover:scale-105
        ease-in
        duration-300 mt-5"
          key={person.name}
        >
          {person.name}
        </div>
      ))}
    </div>
  );
};
