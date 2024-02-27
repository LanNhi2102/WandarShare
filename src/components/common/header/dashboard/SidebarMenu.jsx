
import { Link, useLocation } from "react-router-dom";
import {
  isParentPageActive,
  isSinglePageActive,
} from "../../../../utils/daynamicNavigation";


const SidebarMenu = () => {
  const { pathname } = useLocation()

  const myProperties = [
    { id: 1, name: "List TimeShares", route: "/my-properties" },
    { id: 2, name: "Rent/Exchange History", route: "/my-history" },
    { id: 3, name: "Waitlist Requests", route: "/my-waitlist" },
  ];
  const reviews = [
    { id: 1, name: "My Reviews", route: "/my-review" },
    { id: 2, name: "Visitor Reviews", route: "/my-review" },
  ];
  const manageAccount = [
    {
      id: 1,
      name: "My Package",
      route: "/my-package",
      icon: "flaticon-box",
    },
    {
      id: 2,
      name: "My Profile",
      route: "/my-profile",
      icon: "flaticon-user",
    },
    { id: 3, name: "Logout", route: "/login", icon: "flaticon-logout" },
  ];
  const myWallet = [
    {
      id: 1, name: "My Card", route: "/my-wallet"
    },

  ]
  return (
    <>
      <ul className="sidebar-menu">
        <li className="sidebar_header header">
          <Link to="/">
            <img

              src="/assets/images/header-logo2.png"
              alt="header-logo2.png"
            />
            <span>WandarShare</span>
          </Link>
        </li>
        {/* End header */}

        <li className="title">
          <span>Main</span>
          <ul>
            <li
              className={`treeview ${isSinglePageActive("/my-dashboard", pathname)
                ? "active"
                : ""
                }`}
            >
              <Link to="/my-dashboard">
                <i className="flaticon-layers"></i>
                <span> Dashboard</span>
              </Link>
            </li>
            <li
              className={`treeview ${isSinglePageActive("/create-listing", pathname)
                ? "active"
                : ""
                }`}
            >
              <Link to="/create-listing">
                <i className="flaticon-plus"></i>
                <span> Add New TimeShare</span>
              </Link>
            </li>
            <li
              className={`treeview ${isSinglePageActive("/my-message", pathname)
                ? "active"
                : ""
                }`}
            >
              <Link to="/my-message">
                <i className="flaticon-envelope"></i>
                <span> Message</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* End Main */}

        <li className="title">
          <span>Manage TimeShares</span>
          <ul>
            <li
              className={`treeview ${isParentPageActive(myProperties, pathname) ? "active" : ""
                }`}
            >
              <a data-bs-toggle="collapse" href="#my-property">
                <i className="flaticon-home"></i> <span>My TimeShares</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-property">
                {myProperties.map((item) => (
                  <li key={item.id}>
                    <Link to={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* end properties */}

            <li
              className={`treeview ${isParentPageActive(reviews, pathname) ? "active" : ""
                }`}
            >
              <a data-bs-toggle="collapse" href="#review">
                <i className="flaticon-chat"></i>
                <span>Reviews</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="review">
                {reviews.map((item) => (
                  <li key={item.id}>
                    <Link to={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* End Review */}

            <li
              className={`treeview ${isSinglePageActive("/my-favourites", pathname)
                ? "active"
                : ""
                }`}
            >
              <Link to="/my-favourites">
                <i className="flaticon-heart"></i>
                <span> My Favorites</span>
              </Link>
            </li>
            <li
              className={`treeview ${isSinglePageActive("/my-wallet", pathname)
                ? "active"
                : ""
                }`}
            >
              <Link to="/my-wallet">
                <i className="flaticon-money-bag"></i>
                <span> My Wallet</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* End manage listing */}

        <li className="title">
          <span>Manage Account</span>
          <ul>
            {manageAccount.map((item) => (
              <li
                className={
                  isSinglePageActive(item.route, pathname) ? "active" : ""
                }
                key={item.id}
              >
                <Link to={item.route}>
                  <i className={item.icon}></i> <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
};

export default SidebarMenu;
