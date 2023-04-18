import type { Meta, StoryObj } from "@storybook/react";

import { BrowserRouter } from "shared/Router";

import { Sidebar } from "./index";

const meta = {
  component: Sidebar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ height: "100vh", width: "250px" }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: "left",
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "login to see nav. items",
  },
};
