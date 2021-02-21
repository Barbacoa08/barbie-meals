import { Meta } from "@storybook/react/types-6-0";

import { ToggleButton } from "./";

export default {
  title: "Components/Toggle Button",
  component: ToggleButton,
} as Meta;

const Template = () => <ToggleButton label="label text prop" />;

export const Default = Template.bind({});
Default.args = {};
