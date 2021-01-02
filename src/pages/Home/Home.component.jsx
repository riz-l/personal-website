// Import: Dependencies
import React, { useEffect } from "react";

// Import: Icons
import { FaChevronDown as DownIcon } from "react-icons/fa";

// Import: Elements
import {
  Background,
  Container,
  Splash,
  Heading,
  GalleryWrapper,
} from "./Home.elements";

// Import: Components
import { Button, Gallery } from "../../components";

// Page: Home
export default function Home() {
  // Upon navigation to Home, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Background>
      <Container>
        <Splash>
          <Heading>
            <h1>Joshua Layton</h1>
            <span>Front-end Developer</span>

            <Button text="My Work" icon={<DownIcon />} />
          </Heading>
        </Splash>

        <GalleryWrapper>
          <Gallery />
        </GalleryWrapper>
      </Container>
    </Background>
  );
}
