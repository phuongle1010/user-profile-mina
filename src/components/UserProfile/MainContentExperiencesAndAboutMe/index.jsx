import ExperiencesAndAboutMeStyled from "./styles";

const ExperiencesAndAboutMe = () => {
  return (
    <ExperiencesAndAboutMeStyled>
      <div>
        <h4>Experience</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div>
        <h4>About me</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
          voluptas expedita. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Nulla porro nemo veritatis, quod quae labore.
          <br></br>
          <span>
            Aut, quam saepe! Dolores dolor inventore voluptas a, enim ex sit
            fugit delectus vel quo!
          </span>
        </p>
      </div>

      <div>
        <h4>
          Read more
          <img src="/src/assets/arrow-down-2.png" alt="arrow-dow-2" />
        </h4>
      </div>
    </ExperiencesAndAboutMeStyled>
  );
};

export default ExperiencesAndAboutMe;
