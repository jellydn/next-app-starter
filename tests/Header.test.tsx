import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Header from "../components/Header";

describe("Header component", () => {
  test("should render header", () => {
    render(<Header links={[]} />);
  });
});
