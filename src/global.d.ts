import { IGlobalState } from "types";

import "reactn";

// explanation: https://github.com/CharlesStover/reactn#typescript-support
declare module "reactn/default" {
  export interface State extends IGlobalState {}
}
