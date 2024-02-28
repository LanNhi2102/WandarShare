const PropertyDetails = () => {
  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Property ID : <span>HCM210</span>
            </p>
          </li>
          <li>
            <p>
              Price : <span>$1300000</span>
            </p>
          </li>
          <li>
            <p>
              Property Size : <span>1560 Sq Ft</span>
            </p>
          </li>
          <li>
            <p>
              Year Built : <span>2016-01-09</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Bedrooms : <span>8</span>
            </p>
          </li>
          <li>
            <p>
              Bathrooms : <span>4</span>
            </p>
          </li>
          <li>
            <p>
              Garage : <span>2</span>
            </p>
          </li>
          <li>
            <p>
              Garage Size : <span>200 SqFt</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Property Type : <span>Apartment</span>
            </p>
          </li>
          <li>
            <p>
              Property Status : <span>For Booking</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PropertyDetails;
