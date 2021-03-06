import React from "react";
import { Custom, Document } from "../icons";
import { Section } from "../layout/Section";
import { IconStripe } from ".";

export default {
  component: IconStripe,
  title: "Components|IconStripe"
};

export const base = () => (
  <>
    <Section>
      <IconStripe icon={Custom}>
        This is a very basic component that simply puts an icon on the left of
        the children
      </IconStripe>
    </Section>
    <Section>
      <IconStripe icon={Document}>
        Check how it fits with another icon
      </IconStripe>
    </Section>
  </>
);
