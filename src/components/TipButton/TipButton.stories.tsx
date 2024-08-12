import type { Meta, StoryObj } from "@storybook/react";
import { TipButton } from "./TipButton";

const meta: Meta<typeof TipButton> = {
  title: "App/TipButton",
  component: TipButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "5",
    types: "normal",
  },
};

export const Custom: Story = {
  args: {
    value: "custom",
    types: "custom",
  },
};
