import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import OrderEntry from "../OrderEntry";

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

  it("update toppings subtotal when toppings changes", async () => {
    render(<Options optionType={"toppings"} />);

    //Make sure total starts at $0:00
    const toppingsSubTotal = screen.getByText("Toppings total: $", {
      exact: false,
    });
    expect(toppingsSubTotal).toHaveTextContent("0.00");

    //Update toppings to 1
    const cherriesInput = await screen.findByRole("spinbutton", {
      name: "Cherries",
    });
    userEvent.clear(cherriesInput);
    userEvent.type(cherriesInput, "1");
    expect(toppingsSubTotal).toHaveTextContent("1.5");

    // Update toppings to 2 and check sub-total
    const hotFudgeInput = await screen.findByRole("spinbutton", {
      name: "Hot fudge",
    });
    userEvent.clear(hotFudgeInput);
    userEvent.type(hotFudgeInput, "2");
    expect(toppingsSubTotal).toHaveTextContent("4.5");
  });

  it("updates total when toppings and scoop change", async () => {
    render(<OrderEntry />);
    const totalValue = screen.getByText("Total Value: $", {
      exact: false,
    });
    expect(totalValue).toHaveTextContent("0.00");

    const chocolateInput = await screen.findByRole("spinbutton", {
      name: "Chocolate",
    });
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, "2");
    expect(totalValue).toHaveTextContent("4.00");

    const cherriesInput = await screen.findByRole("spinbutton", {
      name: "Cherries",
    });
    userEvent.clear(cherriesInput);
    userEvent.type(cherriesInput, "1");
    expect(totalValue).toHaveTextContent("5.5");
  });
});
