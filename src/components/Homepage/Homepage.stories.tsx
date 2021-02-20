import { Meta } from "@storybook/react/types-6-0";

import { Homepage } from "./";

export default {
  title: "Components/Homepage",
  component: Homepage,
} as Meta;

const Template = () => <Homepage />;

export const Default = Template.bind({});
Default.args = {};
