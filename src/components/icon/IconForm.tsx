const colorList = {
  scissors: "bg-[radial-gradient(circle,_hsl(39,89%,49%),_hsl(40,84%,53%))]",
  paper: "bg-[radial-gradient(circle,_hsl(230,89%,62%),_hsl(230,89%,65%))]",
  rock: "bg-[radial-gradient(circle,_hsl(349,71%,52%),_hsl(349,70%,56%))]",
} as {
  [key: string]: string;
};

const coloredShadowList = {
  scissors: "shadow-[0_4px_0_0_hsl(39,89%,39%)]",
  paper: "shadow-[0_4px_0_0_hsl(230,89%,52%)]",
  rock: "shadow-[0_4px_0_0_hsl(349,71%,42%)]",
} as {
  [key: string]: string;
};

const innerShadowList = {
  scissors: "shadow-[inset_0_6px_0_0_hsl(0,0%,80%)]",
  paper: "shadow-[inset_0_6px_0_0_hsl(0,0%,80%)]",
  rock: "shadow-[inset_0_6px_0_0_hsl(0,0%,80%)]",
} as {
  [key: string]: string;
};

export const IconForm = ({ icon, id }: { icon: string; id: string }) => {
  return (
    <div
      className={`flex justify-center items-center ${colorList[id]} ${coloredShadowList[id]} rounded-full w-28 h-28`}
    >
      <div
        className={`flex justify-center items-center ${innerShadowList[id]} bg-white rounded-full w-22 h-22 p-3`}
      >
        <img src={icon} alt={id} id={id} />
      </div>
    </div>
  );
};
