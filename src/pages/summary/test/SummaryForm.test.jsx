import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("the functionalities fof summary form", () => {
  it("initial conditions", () => {
    render(<SummaryForm />);
    const buttonElement = screen.getByRole("button", {
      name: /confirm order/i,
    });
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).not.toBeChecked();
    expect(buttonElement).toBeDisabled();
    fireEvent.click(checkboxElement);
    expect(buttonElement).toBeEnabled();
    fireEvent.click(checkboxElement);
    expect(buttonElement).toBeDisabled();
  });
});
