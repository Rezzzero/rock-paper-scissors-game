import { useEffect, useState } from "react";
import { Score } from "./components/score/Score";
import { Select } from "./components/game/Select";
import { RulesModal } from "./components/rules/RulesModal";
import { Result } from "./components/game/Result";
import { listToSelect } from "./constants/constants";
import "./App.css";

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
  const [toggled, setToggled] = useState(false);
  const [bonusGame, setBonusGame] = useState(false);

  useEffect(() => {
    if (selected.id !== "" && houseSelected.id === "") {
      const keys = bonusGame
        ? Object.keys(listToSelect)
        : Object.keys(listToSelect).slice(0, 3);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      const randomItem = listToSelect[randomKey];

      setHouseSelected({
        id: randomItem.id,
        icon: randomItem.icon,
      });
    }
  }, [selected, houseSelected, bonusGame]);

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
      <div className="container mx-auto flex flex-col items-center gap-10 h-screen p-5 lg:p-10">
        <Score score={score} bonusGame={bonusGame} />
        <div className="self-center flex text-white items-center gap-5 font-semibold">
          <p>NORMAL</p>
          <button
            onClick={() => {
              setBonusGame(!bonusGame);
              setToggled(!toggled);
            }}
            className={`toggle-btn ${toggled ? "toggled" : ""}`}
          >
            <div className="thumb"></div>
          </button>
          <p>BONUS</p>
        </div>
        {selected.id === "" && (
          <Select handleSelect={setSelected} bonusGame={bonusGame} />
        )}
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
          className="flex self-center my-auto py-2 px-7 border border-gray-400 rounded-md text-sm text-white tracking-widest lg:text-lg lg:px-10 lg:border-3 lg:rounded-xl lg:self-end"
        >
          RULES
        </button>
      </div>
      {openRules && (
        <RulesModal
          closeModal={() => setOpenRules(false)}
          bonusGame={bonusGame}
        />
      )}
    </>
  );
}

export default App;
