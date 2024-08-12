import type { Meta, StoryObj } from "@storybook/react";
import { Widget, WidgetProps } from "./Widget";

// Meta configuration with descriptions
const meta: Meta<WidgetProps> = {
  title: "App/Widget",
  component: Widget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the widget.",
    },
    description: {
      control: "text",
      description: "The description of the widget.",
    },
    type: {
      control: "radio",
      options: ["info", "warning", "error"],
      description: "The type of the widget, determining the icon and styling.",
    },
  },
};

export default meta;

type Story = StoryObj<WidgetProps>;

// Template function to render the Widget

// Define different stories
export const InfoWidget: Story = {
  args: {
    title: "Information",
    description: "This is an info widget.",
    type: "info",
  },
};

export const WarningWidget: Story = {
  args: {
    title: "Warning",
    description: "This is a warning widget.",
    type: "warning",
  },
};

export const ErrorWidget: Story = {
  args: {
    title: "Error",
    description: "This is an error widget.",
    type: "error",
  },
};
