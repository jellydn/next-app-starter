import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Header from "../components/Header";

describe("Header component", () => {
  test("should render header", () => {
    const fn = jest.fn();
    render(<Header links={[]} onSignIn={fn} />);
  });
});
