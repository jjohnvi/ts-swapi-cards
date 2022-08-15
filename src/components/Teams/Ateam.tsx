type TeamProps = {
  team: Array<string>;
};

export const Ateam = ({ team }: TeamProps) => {
  return (
    <div>
      <div>Team A</div>
      {team.map((name) => (
        <div
          className="bg-slate-800 justify-center items-center gap-4 text-white w-auto
        p-6
        shadow-xl
        rounded-xl
        hover:scale-105
        ease-in
        duration-300 mt-5"
          key={name}
        >
          {name}
        </div>
      ))}
    </div>
  );
};
