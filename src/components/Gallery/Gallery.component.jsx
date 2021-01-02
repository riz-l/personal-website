// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Item } from "./Gallery.elements";

// Import: Components
import { GalleryItem } from "../index";

// Component: Gallery
export default function Gallery() {
  return (
    <Container>
      <Item>
        <GalleryItem
          text="One Response"
          title="Vibrant toy ambulance placed on wood"
          image="https://images.unsplash.com/photo-1502740479091-635887520276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
        />
      </Item>

      <Item>
        <GalleryItem
          text="One ED"
          title="Gloved hands pointing at medical scans"
          image="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        />
      </Item>

      <Item>
        <GalleryItem
          text="Acronym Search"
          title="Eurofighter Typhoon military jet taking off"
          image="https://images.unsplash.com/photo-1580028468862-6895981d7a67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
      </Item>

      <Item>
        <GalleryItem
          text="Personal Website"
          title="Hands typing on a laptop keyboard"
          image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1952&q=80"
        />
      </Item>

      <Item>
        <GalleryItem
          text="Keyboard Shop"
          title="Mechanical keyboard laying alongside a key switch"
          image="https://images.unsplash.com/photo-1595225476474-87563907a212?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
        />
      </Item>

      <Item>
        <GalleryItem
          text="Social Network"
          title="Facebook symbols, icons and logos printed onto pin buttons"
          image="https://images.unsplash.com/photo-1491951931722-5a446214b4e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2006&q=80"
        />
      </Item>
    </Container>
  );
}
