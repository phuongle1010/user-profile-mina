import SGenerationInfoStyled from "./styles";

const GenerationInfo = () => {
  return (
    <SGenerationInfoStyled>
      <div>
        <img src="/src/assets/avt2.jpg" alt="avt2" />
        <div>
          <img src="/src/assets/tick-with-circle.png" alt="tick-with-circle" />
        </div>
      </div>
      <div>
        <p>
          Mina Winkel
          <div></div>
        </p>

        <p>I am a Product Designer based in Melboune</p>
      </div>
      <div>
        <button>...</button>
        <button>Hire me</button>
        <button>
          <img src="/src/assets/follow.png" alt="follow" />
          Follow
        </button>
      </div>
    </SGenerationInfoStyled>
  );
};

export default GenerationInfo;
