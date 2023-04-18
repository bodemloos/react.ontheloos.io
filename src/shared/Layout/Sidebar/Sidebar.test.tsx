import "@testing-library/jest-dom";
import { describe, expect, test } from "vitest";

import { render } from "utils/test";

import { Sidebar } from "./Sidebar";

describe("Render Component", () => {
  test("render component snapshot test", () => {
    const component = render(<Sidebar />);

    expect(component).toMatchSnapshot();
  });
});
