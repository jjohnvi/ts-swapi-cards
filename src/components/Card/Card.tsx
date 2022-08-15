type CardProps = {
  name: string;
  height: string;
  gender: string;
  mass: string;
  pushTeamA: (name: string) => void;
  pushTeamB: (name: string) => void;
};

export const Card = ({
  name,
  height,
  gender,
  mass,
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
      <div className="text-[#5651e5]">{name}</div>
      <div>{height}</div>
      <div>{gender}</div>
      <div>{mass}</div>
      <div>
        <button
          onClick={() => pushTeamA(name)}
          className=" mx-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
        >
          Team A
        </button>
        <button
          onClick={() => pushTeamB(name)}
          className="mx-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
        >
          Team B
        </button>
      </div>
    </div>
  );
};
