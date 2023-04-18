import { Component, ComponentType } from "react";

import {
  IRequireAuthenticatedProps,
  RequireAuthenticated,
} from "./RequireAuthenticated";

export function withRequireAuthenticated<Props>(
  Wrapper: ComponentType<Props>,
  props?: Omit<IRequireAuthenticatedProps, "children">
) {
  return class extends Component<Props> {
    render() {
      return (
        <RequireAuthenticated to={props?.to}>
          <Wrapper {...this.props} />
        </RequireAuthenticated>
      );
    }
  };
}
