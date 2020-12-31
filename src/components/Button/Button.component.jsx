// Import: Dependencies
import React from "react";

// Import: Icons
import { FaQuestion as QuestionIcon } from "react-icons/fa";

// Import: Elements
import { Container } from "./Button.elements";

// Component: Button
export default function Button({ text, icon }) {
  return (
    <Container>
      <p>{text ? text : "Add Text"}</p>
      {icon ? icon : <QuestionIcon />}
    </Container>
  );
}
