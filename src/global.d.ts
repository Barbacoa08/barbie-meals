import "reactn";

// explanation: https://github.com/CharlesStover/reactn#typescript-support
declare module "reactn/default" {
  export interface State {
    showFancy: boolean;
    showImages: boolean;
  }
}
