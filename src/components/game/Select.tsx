import triangleBackground from "../../assets/images/bg-triangle.svg";
import { listToSelect } from "../../constants/constants";
import { IconForm } from "../icon/IconForm";

export const Select = ({
  handleSelect,
}: {
  handleSelect: ({ id, icon }: { id: string; icon: string }) => void;
}) => {
  return (
    <div className="flex justify-center relative">
      <img
        src={triangleBackground}
        alt="triangle"
        className="w-[215px] mt-[50px]"
      />
      <div className="absolute flex justify-center flex-wrap gap-10">
        {Object.keys(listToSelect).map((key) => (
          <IconForm
            key={key}
            icon={listToSelect[key].icon}
            id={listToSelect[key].id}
            onClick={() =>
              handleSelect({
                id: listToSelect[key].id,
                icon: listToSelect[key].icon,
              })
            }
          />
        ))}
      </div>
    </div>
  );
};
