import type { Meta, StoryObj } from "@storybook/react";
import { Logo, LogoProps } from "./Logo";
import styles from "./Logo.module.css";

const meta: Meta<LogoProps> = {
  title: "App/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    imageURL: {
      control: "text",
      description: "The URL of the image to display in the logo.",
    },
    url: {
      control: "text",
      description: "The URL to navigate to when the logo is clicked.",
    },
    shouldRotate: {
      control: "boolean",
      description: "Determines if the logo should rotate or not.",
    },
    customClass: {
      control: "text",
      description: "A custom CSS class to apply to the logo.",
    },
  },
};

export default meta;

type Story = StoryObj<LogoProps>;

export const Default: Story = {
  args: {
    imageURL: "https://vitejs.dev/logo.svg",
    url: "https://vitejs.dev",
    shouldRotate: false,
  },
};

export const RotatingLogo: Story = {
  args: {
    imageURL: "https://vitejs.dev/logo.svg",
    url: "https://vitejs.dev",
    shouldRotate: true,
  },
};

export const CustomClass: Story = {
  args: {
    imageURL: "https://vitejs.dev/logo.svg",
    url: "https://vitejs.dev",
    customClass: styles.custom,
  },
};
