import CaseStudyStyled from "./styles";

const CaseStudy = () => {
  const courseList = [
    {
      id: 1,
      title: "Dropbox",
      logo: "/src/assets/dropbox.png",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0CvvfnyVSpDtHt1nEK63Sesk3AZPrAplGnQ&usqp=CAU",
    },

    {
      id: 2,
      title: "Framer",
      logo: "/src/assets/framer.png",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqT35-JyAdyl74Fw5pbUBcFDUml6LoDjq0ZA&usqp=CAU",
    },

    {
      id: 3,
      title: "Square",
      logo: "/src/assets/square.png",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9LeR3hda4LVqT7ZMb3TZoWN7O9vqsLKykXyhWYimZcuQ8TkX3hsTo_L0CV_4ZVFTpju8&usqp=CAU",
    },
  ];
  return (
    <CaseStudyStyled>
      <div>
        <h4>Case Studies</h4>
        <p>
          <span>View more</span>
          <img src="/src/assets/arrow-top-right.png" alt="arrow-top-right" />
        </p>
      </div>
      <ul>
        {courseList.map((item) => (
          <li key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <div>
              <p>
                <img src={item.logo} alt={item.title} />
                <span>{item.title}</span>
              </p>
              <img
                src="/src/assets/arrow-top-right-white.png"
                alt="arrow-top-right-white"
              />
            </div>
          </li>
        ))}
      </ul>
    </CaseStudyStyled>
  );
};

export default CaseStudy;
