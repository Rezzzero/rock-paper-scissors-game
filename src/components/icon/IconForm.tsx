const colorList = {
  scissors: "bg-[radial-gradient(circle,_hsl(39,89%,49%),_hsl(40,84%,53%))]",
  paper: "bg-[radial-gradient(circle,_hsl(230,89%,62%),_hsl(230,89%,65%))]",
  rock: "bg-[radial-gradient(circle,_hsl(349,71%,52%),_hsl(349,70%,56%))]",
  lizard: "bg-[radial-gradient(circle,_hsl(261,73%,60%),_hsl(261,72%,63%))]",
  spock: "bg-[radial-gradient(circle,_hsl(189,59%,53%),_hsl(189,58%,57%))]",
} as {
  [key: string]: string;
};

const coloredShadowList = {
  scissors: "shadow-[0_4px_0_0_hsl(39,89%,39%)]",
  paper: "shadow-[0_4px_0_0_hsl(230,89%,52%)]",
  rock: "shadow-[0_4px_0_0_hsl(349,71%,42%)]",
  lizard: "shadow-[0_4px_0_0_hsl(261,73%,42%)]",
  spock: "shadow-[0_4px_0_0_hsl(189,59%,42%)]",
} as {
  [key: string]: string;
};

const innerShadowList = {
  scissors: "shadow-[inset_0_6px_0_0_hsl(0,0%,80%)]",
  paper: "shadow-[inset_0_6px_0_0_hsl(0,0%,80%)]",
  rock: "shadow-[inset_0_6px_0_0_hsl(0,0%,80%)]",
  lizard: "shadow-[inset_0_6px_0_0_hsl(0,0%,80%)]",
  spock: "shadow-[inset_0_6px_0_0_hsl(0,0%,80%)]",
} as {
  [key: string]: string;
};

export const IconForm = ({
  icon,
  id,
  onClick,
  bonusGame,
}: {
  icon: string;
  id: string;
  onClick: () => void;
  bonusGame?: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center ${colorList[id]} ${
        coloredShadowList[id]
      } rounded-full ${bonusGame ? "w-22 h-22" : "w-28 h-28"}`}
    >
      <div
        className={`flex justify-center items-center ${
          innerShadowList[id]
        } bg-white rounded-full ${bonusGame ? "w-18 h-18" : "w-22 h-22"} p-3`}
      >
        <img
          src={icon}
          alt={id}
          id={id}
          className={`${bonusGame ? "w-8 h-10" : "w-12 h-14"}`}
        />
      </div>
    </div>
  );
};
