import { Link } from "react-router-dom";

const TermsCondions = () => {
  const termsContent = [
    {
      id: 1,
      title: "Privacy Policy",
      text1: `Briefly describe what the privacy policy covers and the type of information the platform collects from users.`,
      text2: `Information Collection and Use

      Detail the types of personal information collected (e.g., name, email address, property details) and how it's used (e.g., facilitating exchanges, communication between users).
      Data Sharing and Disclosure
      
      Explain circumstances under which user data might be shared with third parties (e.g., legal requirements, service providers) and how users' privacy is protected in such cases.
      Cookies and Tracking Technologies
      
      Describe how the platform uses cookies, web beacons, or similar technologies to enhance user experience and track usage patterns.
      Data Security
      
      Outline the measures taken to protect user data from unauthorized access or breaches.
      User Rights
      
      Inform users of their rights regarding their data, such as accessing, correcting, or deleting their personal information.
      Changes to the Privacy Policy
      
      State how users will be notified of any changes to the policy.
      Contact Information
      
      Provide details on how users can contact you with any privacy-related questions.`,
    },
    {
      id: 2,
      title: "Our Terms",
      text1: `Define the scope of the terms, the nature of the business, and who the terms apply to.`,
      text2: `Account Registration and Use

      Outline the process for account creation and the responsibilities of users regarding account security and conduct.
      Service Description
      
      Describe the timeshare exchange service provided and any membership fees or charges.
      Exchange Rules and Procedures
      
      Detail the process for listing, searching, and confirming timeshare exchanges, including any restrictions or requirements.
      Intellectual Property Rights
      
      Clarify the ownership of content on the platform and the use of trademarks or logos.
      User Conduct
      
      Define acceptable and prohibited behaviors on the platform to ensure a respectful and lawful community.
      Disclaimers and Limitation of Liability
      
      Disclaim warranties to the extent permitted by law and limit your liability regarding the use of your service.
      Dispute Resolution
      
      Specify the process for resolving disputes between users or between users and the platform, including any arbitration or mediation procedures.
      Termination
      
      Explain under what conditions a user's account may be terminated and the consequences thereof.
      Amendments to the Terms
      
      Describe how and when the terms may be updated and how users will be informed of changes.
      Governing Law
      
      State the jurisdiction that governs the terms and any disputes arising from them.
      Contact Information
      
      Provide a way for users to contact you with questions about the terms.`,
    },
  ];

  const navigationList = [
    { id: 1, routeLink: "#", name: "Welcome Text" },
    { id: 2, routeLink: "#", name: "Our Terms" },
    { id: 3, routeLink: "#", name: "Conditions" },
    { id: 4, routeLink: "#", name: "Your Privacy" },
    { id: 5, routeLink: "#", name: "Informations We Collect" },
  ];

  return (
    <div className="row">
      <div className="col-lg-8 col-xl-8">
        <div className="terms_condition_grid">
          {termsContent.map((item) => (
            <div className="grids mb30" key={item.id}>
              <h4>{item.title}</h4>
              <p className="mb20">{item.text1}</p>
              <p>{item.text2}</p>
            </div>
          ))}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="terms_condition_widget">
          <h4 className="title">Navigation</h4>
          <div className="widget_list">
            <ul className="list_details">
              {navigationList.map((list) => (
                <li key={list.id}>
                  <Link to={list.routeLink}>
                    <i className="fa fa-caret-right mr10"></i>
                    {list.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsCondions;
