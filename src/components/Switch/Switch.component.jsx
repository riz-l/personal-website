// Import: Dependencies
import React from "react";

// Import: Elements
import { Button, Label, Checkbox } from "./Switch.elements";

// Component: Switch
export default function Switch({ isOn, handleToggle, onColor }) {
  return (
    <>
      <Checkbox
        checked={isOn}
        onChange={handleToggle}
        id={`react-switch-new`}
        type="checkbox"
      />

      <Label
        style={{ background: isOn && onColor }}
        htmlFor={`react-switch-new`}
      >
        <Button />
      </Label>
    </>
  );
}
