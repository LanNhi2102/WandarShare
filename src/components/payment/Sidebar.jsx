import Bill from "../common/listing-details/Bill";



const Sidebar = () => {
  return (
    <>
      <div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          <div className="sl_creator">
            <h4 className="mb25">Your Bill</h4>
          </div>
          {/* End .sl_creator */}
          <Bill />
        </div>
      </div>
      {/* End .sidebar_listing_list */}

 
    </>
  );
};

export default Sidebar;
