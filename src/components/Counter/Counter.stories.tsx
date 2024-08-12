import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useEffect } from "react";
import Counter, { CounterProps } from "./Counter";

const meta: Meta<CounterProps> = {
  title: "App/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    count: { control: "number" },
  },
} satisfies Meta<CounterProps>;

export default meta;

type Story = StoryObj<CounterProps>;

// Template function with proper typing
const Template = (args: CounterProps) => {
  const [count, setCount] = useState(args.count ?? 0);

  // Sync the count state with Storybook controls
  useEffect(() => {
    if (args.count !== count) {
      setCount(args.count);
    }
  }, [args.count]);

  const handleSetCount: React.Dispatch<React.SetStateAction<number>> = (
    value
  ) => {
    const newCount = typeof value === "function" ? value(count) : value;
    setCount(newCount);
    args.count = newCount;
  };

  return <Counter {...args} count={count} setCount={handleSetCount} />;
};

// Default story
export const Default: Story = {
  render: Template,
  args: {
    count: 0,
  },
};

// Story with initial count of 10
export const WithInitialCount: Story = {
  render: Template,
  args: {
    count: 10,
  },
};

// Story with negative initial count
export const NegativeCount: Story = {
  render: Template,
  args: {
    count: -5,
  },
};
