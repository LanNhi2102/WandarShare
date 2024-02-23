const Pricing = () => {
  const pricingContent = [
    {
      id: 1,
      price: "0",
      title: "Standard Plan",
      features: [
        "View and search information",
        "Make booking and exchange",
        "Time Limit and Number of Timeshares",
        "Limited Support",
      ],
    },
    {
      id: 2,
      price: "300000",
      title: "Premium Plan",
      features: [
        "All Functions of Standard ",
        "Timeshare Management",
        "Deals and Discounts",
        "Priority in Exchange and Support",
        "Unlimited time and number of timeshares",
        "Priority Notice"
      ],
    },

  ];
  return (
    <>
      {pricingContent.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
          <div className="pricing_table">
            <div className="pricing_header">
              <div className="price">{item.price} VND</div>
              <h4>{item.title}</h4>
            </div>
            <div className="pricing_content">
              <ul className="mb0">
                {item.features.map((val, i) => (
                  <li key={i}>{val}</li>
                ))}
              </ul>
            </div>
            <div className="pricing_footer">
              <a className="btn pricing_btn btn-block" href="#">
                Select Package
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pricing;
