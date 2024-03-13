import Discount from "../common/listing-details/Discount";
import Payment from "../common/listing-details/Payment";
import Information from "../common/listing-details/Information";

const DetailsContent = () => {
  return (
    <>
      <div className="listing_single_description">
        <div className="lsd_list">
        </div>
        {/* End .lsd_list */}

        <h4 className="mb30">Your Infomation</h4>
        <Information/>
      </div>
      {/* End .listing_single_description */}

      <div className="additional_details">  
        <div className="row">
          <div className="col-lg-12"> 
            <h4 className="mb15">Payment</h4>
          </div>
          <Payment />
        </div>
      </div>
      {/* End .additional_details */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15"></h4>
          </div>
          <Discount/>
        </div>
      </div>
      {/* End .additional_details */}
    </>
  );
};

export default DetailsContent;
