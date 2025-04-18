import logo from "../../assets/images/logo.svg";

export const Score = ({ score }: { score: number }) => {
  return (
    <div className="flex justify-between items-center border-2 border-gray-500 p-3 rounded-md">
      <img src={logo} alt="logo" className="w-20 h-12" />
      <div className="flex flex-col items-center bg-white py-2 px-4 rounded-md">
        <p className="text-[10px] font-bold tracking-widest">SCORE</p>
        <p className="text-3xl font-bold">{score}</p>
      </div>
    </div>
  );
};
