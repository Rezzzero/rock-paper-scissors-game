import React from "react";

export const PlayAgainButton = ({
  setGameOver,
}: {
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      type="button"
      onClick={() => setGameOver(true)}
      className="bg-white text-black text-sm font-semibold px-10 py-3 rounded-md cursor-pointer"
    >
      PLAY AGAIN
    </button>
  );
};
