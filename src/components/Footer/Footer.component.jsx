// Import: Dependencies
import React from "react";

// Import: Icons
import { IoMdDownload as DownloadIcon } from "react-icons/io";

// Import: Elements
import {
  Container,
  Wrapper,
  Heading,
  ScaleCTA,
  Navigation,
  NavigationItem,
} from "./Footer.elements";

// Import: Components
import { Button } from "../index";

// Component: Footer
export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <Heading>
          <h3>Joshua Layton</h3>

          <ScaleCTA>
            <Button text="Download CV" icon={<DownloadIcon />} />
          </ScaleCTA>
        </Heading>

        <Navigation>
          <NavigationItem>
            <span>Home</span>
          </NavigationItem>

          <NavigationItem>
            <span>Portfolio</span>
          </NavigationItem>

          <NavigationItem>
            <span>About</span>
          </NavigationItem>

          <NavigationItem>
            <span>Contact</span>
          </NavigationItem>
        </Navigation>
      </Wrapper>
    </Container>
  );
}
