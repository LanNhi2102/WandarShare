
import properties from "../../../data/properties";

const TableData = () => {
  let theadConent = [
    "Listing Title",
    "Date",
    "Type",
    "Status",

  ];
  let tbodyContent = properties?.slice(0, 4)?.map((item) => (
    <tr key={item.id}>
      <td scope="row">
        <div className="feat_property list favorite_page style2">
          <div className="thumb">
            <img

              className="img-whp cover"
              src={item.img}
              alt="fp1.jpg"
            />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item">
                  <a href="#">For Rent</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <h4>{item.title}</h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item.location}
              </p>
              <a className="fp_price text-thm" href="#">
                {item.price} VND
                <small>/week</small>
              </a>
            </div>
          </div>
        </div>
      </td>
      {/* End td */}

      <td>30 December, 2020</td>
      {/* End td */}
      <td>Rent </td>

      <td>
        {/* Kiểm tra trạng thái và hiển thị tương ứng, thêm nút Cancel nếu Pending */}
        {item.status === "Finished" ? (
          <span className="status_tag badge">Finished</span>
        ) : (
          <>
            <span className="status_tag badge">Pending</span>
            {/* Thêm nút Cancel */}
            <button
              type="button"
              className="btn btn-danger btn-sm"
              style={{
                padding: '0.25rem 0.5rem',
                fontSize: '0.875rem',
                lineHeight: 1.5,
                verticalAlign: 'middle',
                marginLeft: '5px',
              }}
            >
              <i className="fa fa-times"></i> Cancel
            </button>


          </>
        )}
      </td>
      {/* End td */}
    </tr>
  ));

  return (
    <>
      <table className="table">
        <thead className="thead-light">
          <tr>
            {theadConent.map((value, i) => (
              <th scope="col" key={i}>
                {value}
              </th>
            ))}
          </tr>
        </thead>
        {/* End theaad */}

        <tbody>{tbodyContent}</tbody>
      </table>
    </>
  );
};

export default TableData;
