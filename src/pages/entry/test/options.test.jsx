import { render, screen } from "@testing-library/react";
import Options from "../Options";

describe("options component", () => {
  it("displays image for each scoop from the server", async () => {
    render(<Options optionType="scoops" />);
    // find the images
    const scoopImages = await screen.findAllByRole("img", {
      name: /scoop$/i,
    });
    expect(scoopImages).toHaveLength(2);

    // Confirm alt text
    const allTexts = scoopImages.map((el) => el.alt);
    expect(allTexts).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });

  it("displays image for each toppings from the server", async () => {
    render(<Options optionType="toppings" />);
    // find the images
    const toppingImages = await screen.findAllByRole("img", {
      name: /topping$/i,
    });
    expect(toppingImages).toHaveLength(3);

    // Confirm alt text
    const allTexts = toppingImages.map((el) => el.alt);
    expect(allTexts).toEqual([
      "M&Ms topping",
      "Hot fudge topping",
      "Cherries topping",
    ]);
  });
});
