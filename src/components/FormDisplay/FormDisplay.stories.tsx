import type { Meta, StoryObj } from "@storybook/react";
import { FormDisplay } from "./FormDisplay";

const meta: Meta<typeof FormDisplay> = {
  title: "App/FormDisplay",
  component: FormDisplay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
