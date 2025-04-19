import rulesImage from "../../assets/images/image-rules.svg";
import bonusRulesImage from "../../assets/images/image-rules-bonus.svg";
import closeIcon from "../../assets/images/icon-close.svg";

export const RulesModal = ({
  closeModal,
  bonusGame,
}: {
  closeModal: () => void;
  bonusGame: boolean;
}) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-between items-center bg-white py-15">
      <h1 className="text-3xl font-bold text-gray-800">RULES</h1>
      <img src={bonusGame ? bonusRulesImage : rulesImage} alt="rules" />
      <button type="button" onClick={() => closeModal()}>
        <img src={closeIcon} alt="close icon" />
      </button>
    </div>
  );
};
