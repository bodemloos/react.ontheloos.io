import { Component, ComponentType } from "react";

import { IRequireAnonymousProps, RequireAnonymous } from "./RequireAnonymous";

export function withRequireAnonymous<Props>(
  Wrapper: ComponentType<Props>,
  props?: Omit<IRequireAnonymousProps, "children">
) {
  return class extends Component<Props> {
    render() {
      return (
        <RequireAnonymous to={props?.to}>
          <Wrapper {...this.props} />
        </RequireAnonymous>
      );
    }
  };
}
