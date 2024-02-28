
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

          Welcome to WandarShare, where we make timeshare exchange easy. With a global network of top resorts and personalized service, we are here to help you unlock the perfect vacation. Join us and start exploring today!</p>
          <p>
          Our mission at WandarShare is simple: to provide seamless and rewarding timeshare exchanges for our members. We strive to exceed expectations by offering a diverse selection of destinations and unparalleled customer service.</p>
          <p>
          We have developed a user-friendly platform that streamlines the exchange process, making it easier than ever to swap your timeshare week for a dream getaway. Our extensive network of resorts ensures that you will find the perfect destination, every time.</p>

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
