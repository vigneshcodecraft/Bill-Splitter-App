import type { Meta, StoryObj } from "@storybook/react";
import { FormInput } from "./FormInput";

const meta: Meta<typeof FormInput> = {
  title: "App/FormInput",
  component: FormInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    billValue: 10,
    personValue: 1,
    error: { bill: "", person: "" },
  },
};
