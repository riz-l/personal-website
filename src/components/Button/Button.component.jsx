// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./Button.elements";

// Component: Button
export default function Button({ text, icon, margin }) {
  return (
    <Container
      style={{
        margin: `${margin}`,
      }}
    >
      <p>{text ? text : "Add Text"}</p>
      {icon && icon}
    </Container>
  );
}
