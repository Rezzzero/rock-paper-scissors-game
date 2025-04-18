import scissorsIcon from "/icons/icon-scissors.svg";
import rockIcon from "/icons/icon-rock.svg";
import paperIcon from "/icons/icon-paper.svg";

export const listToSelect = {
  scissors: {
    icon: scissorsIcon,
    id: "scissors",
  },
  paper: {
    icon: paperIcon,
    id: "paper",
  },
  rock: {
    icon: rockIcon,
    id: "rock",
  },
} as {
  [key: string]: {
    icon: string;
    id: string;
  };
};
