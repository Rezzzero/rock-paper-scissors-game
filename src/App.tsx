import { useState } from "react";
import { Score } from "./components/score/Score";
import { Select } from "./components/game/Select";
import { RulesModal } from "./components/rules/RulesModal";

function App() {
  const [score, setScore] = useState(0);
  const [openRules, setOpenRules] = useState(false);
  return (
    <>
      <div className="container mx-auto flex flex-col justify-between h-screen p-5 pb-10">
        <Score score={score} />
        <Select />
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
