import { Meta } from "@storybook/react/types-6-0";

import { LeftNav } from "./";

export default {
  title: "Components/Left Nav",
  component: LeftNav,
} as Meta;

const Template = () => <LeftNav />;

export const Default = Template.bind({});
Default.args = {};
