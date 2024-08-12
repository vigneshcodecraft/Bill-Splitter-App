import type { Meta, StoryObj } from "@storybook/react";
import { TipAmount } from "./TipAmount";

const meta: Meta<typeof TipAmount> = {
  title: "App/TipAmount",
  component: TipAmount,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Tip: Story = {
  args: {
    value: "0.00",
    title: "Tip Amount",
  },
};

export const Total: Story = {
  args: {
    value: "0.00",
    title: "Total Amount",
  },
};
