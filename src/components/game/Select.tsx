import triangleBackground from "../../assets/images/bg-triangle.svg";
import scissorsIcon from "../../assets/images/icon-scissors.svg";
import rockIcon from "../../assets/images/icon-rock.svg";
import paperIcon from "../../assets/images/icon-paper.svg";
import { IconForm } from "../icon/IconForm";

export const Select = () => {
  return (
    <div className="flex justify-center relative">
      <img
        src={triangleBackground}
        alt="triangle"
        className="w-[215px] mt-[50px]"
      />
      <div className="absolute flex justify-center flex-wrap gap-10">
        <IconForm icon={paperIcon} id="paper" />
        <IconForm icon={scissorsIcon} id="scissors" />
        <IconForm icon={rockIcon} id="rock" />
      </div>
    </div>
  );
};
