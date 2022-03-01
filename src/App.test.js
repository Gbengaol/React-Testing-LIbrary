import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  // Find element with role button and text "change to blue"
  const buttonElement = screen.getByRole("button", {
    name: /change to blue/i,
  });

  // Expect button background color to be red
  expect(buttonElement).toHaveStyle({
    backgroundColor: "red",
  });
});

test("button turns blue when clicked", () => {
  render(<App />);
  // Find element with role button and text "change to blue"
  const buttonElement = screen.getByRole("button", {
    name: /change to blue/i,
  });

  // Click button and expect the background color to change to blue
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({
    backgroundColor: "blue",
  });

  // Expect button text to change to red
  expect(buttonElement.textContent).toBe("Change to red");
});
