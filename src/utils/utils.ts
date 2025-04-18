type Result = "win" | "lose" | "draw";

export const getResult = (player: string, opponent: string): Result => {
  if (player === opponent) return "draw";

  const rules: Record<string, string> = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  return rules[player] === opponent ? "win" : "lose";
};
