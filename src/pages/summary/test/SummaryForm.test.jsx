import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

describe("the functionalities for summary form", () => {
  it("initial conditions", () => {
    render(<SummaryForm />);
    const buttonElement = screen.getByRole("button", {
      name: /confirm order/i,
    });
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).not.toBeChecked();
    expect(buttonElement).toBeDisabled();
    userEvent.click(checkboxElement);
    expect(buttonElement).toBeEnabled();
    userEvent.click(checkboxElement);
    expect(buttonElement).toBeDisabled();
  });

  test("popover response to hover", async () => {
    render(<SummaryForm />);
    // popover starts out hidden
    const nullPopoverElement = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopoverElement).toBeNull();
    // popover appears when we hover
    const termsText = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsText);
    const popoverElement = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(popoverElement).toBeInTheDocument();

    // popover disappears when me don't hover
    userEvent.unhover(termsText);
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/no ice cream will actually be delivered/i)
    );
  });
});
