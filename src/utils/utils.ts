type Result = "win" | "lose" | "draw";

export const getResult = (player: string, opponent: string): Result => {
  if (player === opponent) return "draw";

  const rules: Record<string, string[]> = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"],
  };

  return rules[player].includes(opponent) ? "win" : "lose";
};
