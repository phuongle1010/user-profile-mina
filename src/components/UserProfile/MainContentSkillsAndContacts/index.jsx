import SkillsAndContactsStyled from "./styles";

const SkillsAndContacts = () => {
  const skillList = ["UX Design", "Product Design", "Webflow", "Figma"];
  return (
    <SkillsAndContactsStyled>
      <div>
        <h4>Skills</h4>
        <ul>
          {skillList.map((item, index) => (
            <li key={skillList[index]}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Location</h4>
        <p>
          <img src="/src/assets/australia.png" alt="australia" />
          <span>Melbourne,Australia</span>
        </p>
      </div>

      <div>
        <h4>Website</h4>
        <p>
          <a>minawinkel.com</a>
          <img src="/src/assets/arrow-top-right.png" alt="arrow-top-right" />
        </p>
      </div>

      <div>
        <h4>Email</h4>
        <p>
          <a>hello@minawinkwl.com</a>
          <img src="/src/assets/arrow-top-right.png" alt="arrow-top-right" />
        </p>
      </div>

      <div>
        <button>Add to list</button>
        <button>Message</button>
      </div>
    </SkillsAndContactsStyled>
  );
};

export default SkillsAndContacts;
