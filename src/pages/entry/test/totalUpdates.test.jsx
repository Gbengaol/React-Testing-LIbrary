import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

describe("totalUpdates test", () => {
  it("update scoop subtotal when scoop changes", async () => {
    render(<Options optionType={"scoops"} />);

    //Make sure total starts at $0:00
    const scoopSubTotal = screen.getByText("Scoops total: $", {
      exact: false,
    });
    expect(scoopSubTotal).toHaveTextContent("0.00");

    //Update scoops to 1
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "1");
    expect(scoopSubTotal).toHaveTextContent("2.00");

    // Update scoops to 2 and check sub-total
    const chocolateInput = await screen.findByRole("spinbutton", {
      name: "Chocolate",
    });
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, "2");
    expect(scoopSubTotal).toHaveTextContent("6.00");
  });
});
