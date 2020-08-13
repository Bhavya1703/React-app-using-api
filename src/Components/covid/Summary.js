import React from "react";
import "./Covid.css";

class Summary extends React.Component {
  render() {
    const { summary, currentDate } = this.props;
    return (
      <div className="row">
        <div className="NewConfirmed">
          <h2>New Confirmed</h2>
          <h1>{summary.NewConfirmed}</h1>
          <h4>{new Date(currentDate).toDateString()}</h4>
        </div>
        <div className="TotalConfirmed">
          <h2>Total Confirmed</h2>
          <h1>{summary.TotalConfirmed}</h1>
          <h4>{new Date(currentDate).toDateString()}</h4>
        </div>
        <div className="TotalRecovered">
          <h2>Total Recoverd</h2>
          <h1>{summary.TotalRecovered}</h1>
          <h4>{new Date(currentDate).toDateString()}</h4>
        </div>
        <div className="NewDeaths">
          <h2>New Deaths</h2>
          <h1>{summary.NewDeaths}</h1>
          <h4>{new Date(currentDate).toDateString()}</h4>
        </div>
        <div className="TotalDeaths">
          <h2>Total Deaths</h2>
          <h1>{summary.TotalDeaths}</h1>
          <h4>{new Date(currentDate).toDateString()}</h4>
        </div>
      </div>
    );
  }
}

export default Summary;
