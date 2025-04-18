import rulesImage from "../../assets/images/image-rules.svg";
import closeIcon from "../../assets/images/icon-close.svg";

export const RulesModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-between items-center bg-white py-15">
      <h1 className="text-3xl font-bold text-gray-800">RULES</h1>
      <img src={rulesImage} alt="rules" />
      <button type="button" onClick={() => closeModal()}>
        <img src={closeIcon} alt="close icon" />
      </button>
    </div>
  );
};
