import triangleBackground from "../../assets/images/bg-triangle.svg";
import pentagonBackground from "../../assets/images/bg-pentagon.svg";
import { listToSelect } from "../../constants/constants";
import { IconForm } from "../icon/IconForm";
import { useDeviceSize } from "../../hooks/useDeviceSize";
export const Select = ({
  handleSelect,
  bonusGame,
}: {
  handleSelect: ({ id, icon }: { id: string; icon: string }) => void;
  bonusGame: boolean;
}) => {
  const { width } = useDeviceSize();
  const list = bonusGame
    ? Object.keys(listToSelect)
    : Object.keys(listToSelect).slice(0, 3).reverse();
  return (
    <div className="flex justify-center relative">
      <img
        src={bonusGame ? pentagonBackground : triangleBackground}
        alt="triangle"
        className={`w-[215px] mt-[50px] ${
          bonusGame ? "lg:w-[360px]" : "lg:w-[300px]"
        } lg:mt-[100px]`}
      />
      {list.map((key, index) => {
        const startAngle = bonusGame ? 270 : 90;
        const total = list.length;
        const angle = (360 / total) * index + startAngle;
        let radius;

        if (bonusGame) {
          radius = width > 1024 ? 175 : 110;
        } else {
          radius = width > 768 ? 160 : 90;
        }

        return (
          <div
            key={key}
            className={`absolute ${
              bonusGame ? "top-[60%] -translate-y-1/2" : "top-1/4"
            } left-1/2 -translate-x-1/2`}
            style={{
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
            }}
          >
            <IconForm
              icon={listToSelect[key].icon}
              id={listToSelect[key].id}
              bonusGame={bonusGame}
              onClick={() =>
                handleSelect({
                  id: listToSelect[key].id,
                  icon: listToSelect[key].icon,
                })
              }
            />
          </div>
        );
      })}
    </div>
  );
};
