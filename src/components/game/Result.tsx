import { useEffect, useState } from "react";
import { IconForm } from "../icon/IconForm";
import { getResult } from "../../utils/utils";
import { PlayAgainButton } from "../ui/button/PlayAgainButton";
import styles from "./Result.module.css";

export const Result = ({
  selected,
  houseSelected,
  setScore,
  setGameOver,
}: {
  selected: { id: string; icon: string };
  houseSelected: { id: string; icon: string };
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showHouse, setShowHouse] = useState(false);
  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHouse(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const result = getResult(selected.id, houseSelected.id);

  useEffect(() => {
    const resultTimer = setTimeout(() => {
      if (result === "win") {
        setScore((prev) => prev + 1);
        setShowResult(true);
      } else if (result === "lose") {
        setScore((prev) => prev - 1);
        setShowResult(true);
      } else {
        setShowResult(true);
      }
    }, 1000);
    return () => clearTimeout(resultTimer);
  }, [result, setScore]);

  return (
    <div className="flex flex-col relative">
      <div className="flex items-center justify-between gap-8 text-white text-sm font-semibold tracking-widest lg:w-[1000px]">
        <div className="flex flex-col items-center justify-between h-[160px] lg:h-[390px] lg:flex-col-reverse">
          <IconForm
            icon={selected.icon}
            id={selected.id}
            result={true}
            onClick={() => {}}
          />
          <p className="lg:text-2xl">YOU PICKED</p>
          {result === "win" && showResult && (
            <div className={styles.firstRipple}>
              <div className={styles.secondRipple}>
                <div className={styles.thirdRipple} />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-between h-[160px] lg:h-[390px] lg:flex-col-reverse">
          {showHouse ? (
            <IconForm
              icon={houseSelected.icon}
              id={houseSelected.id}
              result={true}
              onClick={() => {}}
            />
          ) : (
            <div className="w-24 h-24 mt-3 bg-black opacity-10 rounded-full lg:w-[250px] lg:h-[250px]" />
          )}
          <p className="lg:text-2xl">THE HOUSE PICKED</p>
          {result === "lose" && showResult && (
            <div className={styles.firstRipple}>
              <div className={styles.secondRipple}>
                <div className={styles.thirdRipple} />
              </div>
            </div>
          )}
        </div>
      </div>
      {result === "win" && showResult && (
        <div className="flex flex-col justify-center items-center h-[160px] text-white text-4xl lg:text-5xl font-bold tracking-widest gap-4 lg:tracking-wide lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2">
          YOU WIN
          <PlayAgainButton setGameOver={setGameOver} />
        </div>
      )}
      {result === "lose" && showResult && (
        <div className="flex flex-col justify-center items-center h-[160px] text-white text-4xl lg:text-5xl font-bold tracking-widest gap-4 lg:tracking-wide lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2">
          YOU LOSE
          <PlayAgainButton setGameOver={setGameOver} />
        </div>
      )}
      {result === "draw" && showResult && (
        <div className="flex flex-col justify-center items-center h-[160px] text-white text-4xl lg:text-5xl font-bold tracking-widest gap-4 lg:tracking-wide lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2">
          DRAW
          <PlayAgainButton setGameOver={setGameOver} />
        </div>
      )}
    </div>
  );
};
