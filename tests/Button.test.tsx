import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Button from "../components/Button";

describe("Button component", () => {
  test("should render button", () => {
    render(<Button size="s">Button</Button>);
  });
});
