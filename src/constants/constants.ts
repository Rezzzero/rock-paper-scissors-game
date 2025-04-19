import scissorsIcon from "/icons/icon-scissors.svg";
import rockIcon from "/icons/icon-rock.svg";
import paperIcon from "/icons/icon-paper.svg";
import lizardIcon from "/icons/icon-lizard.svg";
import spockIcon from "/icons/icon-spock.svg";

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
  lizard: {
    icon: lizardIcon,
    id: "lizard",
  },
  spock: {
    icon: spockIcon,
    id: "spock",
  },
} as {
  [key: string]: {
    icon: string;
    id: string;
  };
};
