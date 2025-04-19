import logo from "../../assets/images/logo.svg";
import bonusLogo from "../../assets/images/logo-bonus.svg";

export const Score = ({
  score,
  bonusGame,
}: {
  score: number;
  bonusGame: boolean;
}) => {
  return (
    <div className="flex justify-between items-center w-full border-2 border-gray-500 p-3 rounded-md lg:w-[800px] lg:h-[160px] lg:border-4 lg:rounded-xl lg:px-8">
      <img
        src={bonusGame ? bonusLogo : logo}
        alt="logo"
        className={`${
          bonusGame ? "w-16 lg:w-34 lg:h-27" : "w-20 lg:w-38 lg:h-26"
        } h-12`}
      />
      <div className="flex flex-col items-center bg-white py-2 px-4 rounded-md lg:h-full lg:py-4 lg:px-12 lg:rounded-xl">
        <p className="text-[10px] font-bold tracking-widest lg:text-lg lg:font-semibold lg:tracking-wide">
          SCORE
        </p>
        <p className="text-3xl text-gray-600 font-bold lg:text-6xl">{score}</p>
      </div>
    </div>
  );
};
