// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, TextWrapper, Text } from "./GalleryItem.elements";

// Component: GalleryItem
export default function GalleryItem({ image, text, title }) {
  return (
    <Container style={{ backgroundImage: `url(${image})` }} title={title}>
      <TextWrapper>
        <Text>{text}</Text>
      </TextWrapper>
    </Container>
  );
}
