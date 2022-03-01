import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("tests for app.js", () => {
  test("button has correct initial color", () => {
    render(<App />);
  });
});
