// import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SwapiPerson, { SwapiPersonProps } from "./SwapiPerson";

const meta = {
  title: "App/SwapiPerson",
  component: SwapiPerson,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<SwapiPersonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Persons: Story = {
  args: {
    id: 1,
  },
};
