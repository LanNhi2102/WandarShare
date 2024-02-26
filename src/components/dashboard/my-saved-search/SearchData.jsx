import React from 'react';

const SearchData = ({ accountBalance = "3,600,000 VND" }) => {
  return (
    <>
      {/* Khung hiển thị số dư tài khoản */}
      <div className="account-balance-container" style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h3>Account balance: {accountBalance}</h3>
      </div>

      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Classify</th>
            <th className="dn-lg" scope="col"></th>
            <th className="dn-lg" scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Date</th>
            <th scope="col">Money</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="title" scope="row">Deposit</th>
            <td className="dn-lg"></td>
            <td className="dn-lg"></td>
            <td></td>
            <td></td>
            <td className="para">March 22, 2023</td>
            <td className="para">+1,000,000 VND</td>
          </tr>
          <tr>
            <th className="title" scope="row">Deposit</th>
            <td className="dn-lg"></td>
            <td className="dn-lg"></td>
            <td></td>
            <td></td>
            <td className="para">January 12, 2023</td>
            <td className="para">+1,000,000 VND</td>
          </tr>
          <tr>
            <th className="title active" scope="row">Withdraw</th>
            <td className="dn-lg"></td>
            <td className="dn-lg"></td>
            <td></td>
            <td></td>
            <td className="para">December 30, 2022</td>
            <td className="para">-700,000 VND</td>
          </tr>
          <tr>
            <th className="title" scope="row">Deposit</th>
            <td className="dn-lg"></td>
            <td className="dn-lg"></td>
            <td></td>
            <td></td>
            <td className="para">September 15, 2022</td>
            <td className="para">+1,600,000 VND</td>
          </tr>
          <tr>
            <th className="title" scope="row">Withdraw</th>
            <td className="dn-lg"></td>
            <td className="dn-lg"></td>
            <td></td>
            <td></td>
            <td className="para">December 30, 2019</td>
            <td className="para">-300,000 VND</td>
          </tr>
          <tr>
            <th className="title" scope="row">Deposit</th>
            <td className="dn-lg"></td>
            <td className="dn-lg"></td>
            <td></td>
            <td></td>
            <td className="para">December 30, 2019</td>
            <td className="para">+1,000,000 VND</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SearchData;
