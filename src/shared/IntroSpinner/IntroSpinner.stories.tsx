import type { Meta, StoryObj } from "@storybook/react";

import { IntroSpinner } from "./index";

const meta = {
  component: IntroSpinner,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof IntroSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Storybook",
  },
};
