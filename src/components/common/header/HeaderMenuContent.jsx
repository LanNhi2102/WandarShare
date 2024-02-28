import { Link, useLocation } from "react-router-dom";
import MyAccount from "./dashboard/MyAccount";

// eslint-disable-next-line react/prop-types
const HeaderMenuContent = ({ float = "" }) => {
  const { pathname } = useLocation()
  const token = localStorage.getItem('access_token');

  const destination = [
    {
      id: 1,
      title: "City",
      items: [
        {
          name: "Ha Noi",
          routerPath: "/blog-list-1",
        },
        {
          name: "TP Ho Chi Minh",
          routerPath: "/blog-list-2",
        },
        {
          name: "Da Nang",
          routerPath: "/blog-list-3",
        },
        {
          name: "Nha Trang",
          routerPath: "/my-review",
        },
        {
          name: "Da Lat",
          routerPath: "/my-favourites",
        },
        {
          name: "Sa Pa",
          routerPath: "/my-profile",
        },
        {
          name: "Hoi An",
          routerPath: "/my-package",
        },
      ],
    },
    {
      id: 2,
      title: "Resort",
      items: [
        {
          name: "Ocean Bay Phu Quoc Resort and Spa",
          routerPath: "/listing-details-v1/3",
        },
        {
          name: "Zest Resort & Spa Hoi An",
          routerPath: "/listing-details-v2/2",
        },
        {
          name: "Palm Bay Resort Phu Quoc",
          routerPath: "/listing-details-v3",
        },
        {
          name: "Fairy Mountain Retreat",
          routerPath: "/listing-details-v4",
        },
      ],
    },
  ];

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      <li className="dropitem">
        <Link
          to="/"
          className={pathname === "/" ? "ui-active" : undefined}
        >
          Home
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link
          to="/about-us"
          className={pathname === "/about-us" ? "ui-active" : undefined}
        >
          About Us
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="#"
          className={
            destination.some((parent) => {
              return parent.items.some(
                (page) =>
                  page.routerPath?.split('/')[1] === pathname?.split('/')[1]
                // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
              );
            })
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Destination</span>{" "}
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {destination.map((item) => (
            <li className="dropitem arrow" key={item.id}>
              <a
                href="#"
                className={
                  item.items.some(
                    (page) =>
                      page.routerPath?.split('/')[1] === pathname?.split('/')[1]
                    // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
                  )
                    ? "ui-active"
                    : undefined
                }
              >
                {item.title}
              </a>
              {/* <!-- Level Three--> */}
              <ul className="sub-menu ">
                {item.items.map((val, i) => (
                  <li key={i}>
                    <Link
                      to={val.routerPath}
                      className={
                        pathname?.split('/')[1] === val.routerPath?.split('/')[1]
                          // val.routerPath + "/[id]" === pathname?.split('/')[1]
                          ? "ui-active"
                          : undefined
                      }
                    >
                      {val.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link
          to="/faq"
          className={pathname === "/faq" ? "ui-active" : undefined}
        >
          Faq
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link
          to="/contact"
          className={pathname === "/contact" ? "ui-active" : undefined}
        >
          Contact
        </Link>
      </li>
      {/* End .dropitem */}

      <li className={"dropitem"}>
        {token ? (
          <li className="user_setting">
          <div className="dropdown">
            <a className="btn dropdown-toggle" href="#" data-bs-toggle="dropdown">
              <img
  
                className="rounded-circle"
                src="/assets/images/team/e1.png"
                alt="e1.png"
              />
              <span className="dn-1199 ms-1">Du Tran Vinh Hung</span>
            </a>
            <div className="dropdown-menu">
              <MyAccount />
            </div>
          </div>
        </li>
        ) : (
        <a
          href="#"
          className="btn flaticon-user"
          data-bs-toggle="modal"
          data-bs-target=".bd-example-modal-lg"
        >
          <span className="dn-lg">Login/Register</span>
        </a>
        )}
      </li>
      {/* End .dropitem */}

      <li className={`list-inline-item add_listing ${float}`}>
        <Link to="/create-listing">
          <span className="flaticon-plus"></span>
          <span className="dn-lg"> Add New TimeShare</span>
        </Link>
      </li>
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
