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

test("initial conditions", () => {
  render(<App />);
  // Check that button starts out enabled
  const buttonElement = screen.getByRole("button", {
    name: /change to blue/i,
  });
  expect(buttonElement).toBeEnabled();

  // Check that checkbox starts out unchecked
  const checkboxElement = screen.getByRole("checkbox");
  expect(checkboxElement).not.toBeChecked();
});

test("button is disabled when checkbox is checked", () => {
  render(<App />);
  const checkboxElement = screen.getByRole("checkbox", {
    name: "Disable button",
  });
  const buttonElement = screen.getByRole("button", {
    name: /change to blue/i,
  });
  // Click the checkbox
  fireEvent.click(checkboxElement);

  // Check that checkbox starts out unchecked
  expect(buttonElement).toBeDisabled();

  // Click the checkbox again
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
});
