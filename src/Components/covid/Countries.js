import React from "react";
import "./Covid.css";

class Countries extends React.Component {
  render() {
    const { countries } = this.props;
    return (
      <tr>
        <td>{countries.Country}</td>
        <td>{countries.NewConfirmed}</td>
        <td>{countries.TotalConfirmed}</td>
        <td>{countries.NewDeaths}</td>
      </tr>
    );
  }
}

export default Countries;
