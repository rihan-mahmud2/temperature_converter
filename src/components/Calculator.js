import React from "react";
import TemperatureInput from "./TemperatureInput";
import { convert, toCelcius, toFahrenheit } from "./Converter/Converter";
import BoilingVerdict from "./BoilingVerdict";
// import BoilingVerdict from "./BoilingVerdict";
export default class Calculator extends React.Component {
  state = {
    temperature: "",
    scale: "c",
  };

  onchangeInput = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celcius =
      scale === "f" ? convert(temperature, toCelcius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celcius}
          onChangeTemperature={this.onchangeInput}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onChangeTemperature={this.onchangeInput}
        />
        <BoilingVerdict celcius={parseFloat(temperature)} />
      </div>
    );
  }
}
