
import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
  const missionContent = [
    {
      id: 1,
      icon: "flaticon-user",
      number: "80,123",
      meta: "Customers to date",
    },
    {
      id: 2,
      icon: "flaticon-home",
      number: "74 Million VND",
      meta: "In home sales",
    },
    {
      id: 3,
      icon: "flaticon-transfer",
      number: "468 Million VND",
      meta: "In Savings",
    },
  ];

  return (
    <>
      <div className="col-lg-8 col-xl-7">
        <div className="about_content">
          <p className="large">
            Start with a compelling narrative that introduces your timeshare exchange platform. Explain what motivated the inception of the platform and the core problem it aims to solve for timeshare owners. This section should encapsulate your mission and set the tone for the rest of the page.
          </p>
          <p>
            Clearly articulate your mission statement. This could focus on providing timeshare owners with unparalleled flexibility, variety, and value in their vacation experiences. Highlight your commitment to creating a trusted community of like-minded individuals who can explore the world through timeshare exchanging.
          </p>
          <p>
            Describe the services your platform offers in detail. Explain how users can list their properties, search for exchanges, and finalize swaps. Highlight any unique features or benefits, such as a wide selection of properties, user-friendly interface, or dedicated customer support.Outline the core values that guide your operations and decision-making process. Whether it's transparency, innovation, customer satisfaction, or sustainability, sharing your values helps align your platform with users who share similar principles.
          </p>

          <ul className="ab_counting">
            {missionContent.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <div className="about_counting">
                  <div className="icon">
                    <span className={`${item.icon}`}></span>
                  </div>
                  <div className="details">
                    <h3>{item.number}</h3>
                    <p>{item.meta}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-5">
        <div className="about_thumb">
          <img
            className="img-fluid w100 cover"
            src="/assets/images/about/1.jpg"
            alt="1.jpg"
          />
          <PopupVideo />
        </div>
      </div>
    </>
  );
};

export default OurMission;
