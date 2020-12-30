// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container, Splash, Heading } from "./Home.elements";

// Page: Home
export default function Home() {
  // Upon navigation to Home, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Splash>
        <Heading>
          <h1>Joshua Layton</h1>
          <span>Front-end Developer</span>
        </Heading>
      </Splash>
    </Container>
  );
}
