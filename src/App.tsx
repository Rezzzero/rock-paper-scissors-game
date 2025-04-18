import { useEffect, useState } from "react";
import { Score } from "./components/score/Score";
import { Select } from "./components/game/Select";
import { RulesModal } from "./components/rules/RulesModal";
import { Result } from "./components/game/Result";
import { listToSelect } from "./constants/constants";

function App() {
  const [score, setScore] = useState<number>(
    Number(localStorage.getItem("score")) || 0
  );
  const [openRules, setOpenRules] = useState(false);
  const [selected, setSelected] = useState<{ id: string; icon: string }>({
    id: "",
    icon: "",
  });
  const [houseSelected, setHouseSelected] = useState<{
    id: string;
    icon: string;
  }>({
    id: "",
    icon: "",
  });
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (selected.id !== "" && houseSelected.id === "") {
      const keys = Object.keys(listToSelect);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      const randomItem = listToSelect[randomKey];

      setHouseSelected({
        id: randomItem.id,
        icon: randomItem.icon,
      });
    }
  }, [selected, houseSelected]);

  useEffect(() => {
    if (gameOver) {
      setSelected({ id: "", icon: "" });
      setHouseSelected({ id: "", icon: "" });
      setGameOver(false);
    }
  }, [gameOver]);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  return (
    <>
      <div className="container mx-auto flex flex-col justify-between h-screen p-5 pb-10">
        <Score score={score} />
        {selected.id === "" && <Select handleSelect={setSelected} />}
        {selected.id !== "" && (
          <Result
            selected={selected}
            houseSelected={houseSelected}
            setScore={setScore}
            setGameOver={setGameOver}
          />
        )}
        <button
          type="button"
          onClick={() => setOpenRules(true)}
          className="flex self-center items-center py-2 px-7 border border-gray-400 rounded-md text-sm text-white tracking-widest"
        >
          RULES
        </button>
      </div>
      {openRules && <RulesModal closeModal={() => setOpenRules(false)} />}
    </>
  );
}

export default App;
