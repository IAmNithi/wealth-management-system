import React, { Component } from "react";
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            responseData: [{
                "img": "https://www.scmp.com/sites/default/files/2015/04/20/scmpost_stp0569_48839415.jpg",
                "name": "HONG KONG TECHNOLOGY",
                "Volatility": "26.84%",
                "month_return": "2.96%",
                "Minimum_Return": "37.29%",
                "Minimum_Inverstment": "HKD 170,000",
                "Eligilibility": "Available for all Investors"
            },
            {
                "img": "http://www.mimoa.eu/images/23034_l.jpg",
                "name": "HONG KONG/CHINA TECHNOLOGY",
                "Volatility": "28.01%",
                "month_return": "2.96%",
                "Minimum_Return": "24.11%",
                "Minimum_Inverstment": "HKD 170,000",
                "Eligilibility": "Available for all Investors"
            },
            {
                "img": "https://www.ept.ca/wp-content/uploads/sites/29/2016/02/Leader-Tech-EMI-shield.jpg",
                "name": "US TECH LEADER",
                "Volatility": "19.84%",
                "month_return": "-2.13%",
                "Minimum_Return": "26.64%",
                "Minimum_Inverstment": "HKD 3,500",
                "Eligilibility": "Available for all Investors"
            },
            {
                "img": "https://dollarsandsense.sg/wp-content/uploads/2017/11/xavier-lee-304841.jpg",
                "name": "SINGAPORE REITS",
                "Volatility": "9.05%",
                "month_return": "2.34%",
                "Minimum_Return": "9.52%",
                "Minimum_Inverstment": "HKD 6,000",
                "Eligilibility": "Available for all Investors"
            },
            {
                "img": "https://s1.ibtimes.com/sites/www.ibtimes.com/files/2013/05/30/rtr3afc5.jpg",
                "name": "HONG KONG CONSUMERS",
                "Volatility": "26.84%",
                "month_return": "2.96%",
                "Minimum_Return": "37.29%",
                "Minimum_Inverstment": "HKD 170,000",
                "Eligilibility": "Available for all Investors"
            },
            {
                "img": "https://nonprofitchroniclesdotcom.files.wordpress.com/2015/06/money1.jpg",
                "name": "CASH IS KING",
                "Volatility": "26.84%",
                "month_return": "2.96%",
                "Minimum_Return": "37.29%",
                "Minimum_Inverstment": "HKD 170,000",
                "Eligilibility": "Available for all Investors"
            },
            {
                "img": "https://www.mojix.com/wp-content/uploads/2017/11/healthcare012.jpg",
                "name": "HEALTH CARE",
                "Volatility": "26.84%",
                "month_return": "2.96%",
                "Minimum_Return": "37.29%",
                "Minimum_Inverstment": "HKD 170,000",
                "Eligilibility": "Available for all Investors"
            }]
        };
    }

    renderCard() {
        const listItems = this.state.responseData.map((data, index) =>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 pb-2" key={index+data.name}>
            <div className="card">
            <div className="image">
              <img className="card-img-top" src={data.img} alt="Card image cap" />
              <h2><span>{data.name}</span></h2>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Volatility <span className="list-val">{data.Volatility}</span></li>
                <li className="list-group-item">1 Month Return <span className="list-val">{data.month_return}</span></li>
                <li className="list-group-item">Minimum Return <span className="list-val">{data.Minimum_Return}</span></li>
                <li className="list-group-item">Minimum Inverstment <span className="list-val">{data.Minimum_Inverstment}</span></li>
                <li className="list-group-item">Eligilibility <span className="list-val">{data.Eligilibility}</span></li>
              </ul>
              <div className="card-body">
                <a className="btn btn-danger btn-lg btn-block" href="/main">Explore Investment Idea</a>
              </div>
            </div>
          </div>
        )
        return listItems;
    }
  render() {
      console.log('responseData', this.state.responseData);
    return (
      <div className="main">
      <div className="container-fluid">
        <div className="row">
          {this.renderCard()}
        </div>
      </div>
      </div>
    );
  }
}

export default Main;
