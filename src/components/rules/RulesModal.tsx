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
    <>
      <div className="lg:absolute lg:inset-0 lg:bg-black/50"></div>
      <div
        className={`absolute inset-0 flex flex-col justify-between items-center bg-white py-15 lg:px-8 lg:py-8 lg:self-center lg:mx-auto lg:w-[410px] ${
          bonusGame ? "lg:h-[460px]" : "lg:h-[420px]"
        } lg:rounded-xl`}
      >
        <h1 className="text-3xl font-bold text-gray-800 lg:self-start">
          RULES
        </h1>
        <img src={bonusGame ? bonusRulesImage : rulesImage} alt="rules" />
        <button
          type="button"
          onClick={() => closeModal()}
          className="lg:absolute lg:top-10 lg:right-8"
        >
          <img src={closeIcon} alt="close icon" />
        </button>
      </div>
    </>
  );
};
