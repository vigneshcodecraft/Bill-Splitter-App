import { Meta, StoryObj } from "@storybook/react";
import NumberInput, { NumberInputProps } from "./NumberInput";

const meta = {
  title: "App/NumberInput",
  component: NumberInput,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<NumberInputProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultNumber: Story = {
  args: {
    value: 10,
    label: "Bill",
    typeOfIcon: "dollar",
  },
};
