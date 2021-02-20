import { Meta } from "@storybook/react/types-6-0";

import { App } from "./";

export default {
  title: "App",
  component: App,
} as Meta;

const Template = () => <App />;

export const Default = Template.bind({});
Default.args = {};
