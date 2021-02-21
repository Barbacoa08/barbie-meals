import { Meta } from "@storybook/react/types-6-0";

import { ToggleButton } from "./";
import { mockdata } from "./mock-data";

export default {
  title: "Components/Toggle Button",
  component: ToggleButton,
} as Meta;

// TODO: BUG: switch is not showing up
const Template = () => (
  <main style={{ maxWidth: 500 }}>
    <ToggleButton {...mockdata} />
  </main>
);

export const Default = Template.bind({});
Default.args = {};
