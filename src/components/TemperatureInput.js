import React from "react";

const celciusNames = {
  c: "celcius",
  f: "fahrenheit",
};
export default function TemperatureInput({
  scale,
  temperature,
  onChangeTemperature,
}) {
  return (
    <fieldset>
      <legend>Enter temperature in {celciusNames[scale]}</legend>
      <input
        type="text"
        value={temperature}
        onChange={(e) => onChangeTemperature(e,scale)}
      />
    </fieldset>
  );
}
