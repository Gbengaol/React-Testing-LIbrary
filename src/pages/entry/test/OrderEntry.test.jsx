import {
  render,
  screen,
  waitFor,
} from "../../../test-utils/testing-library-utils";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mocks/server.js";

describe("Test Order Entry component", () => {
  it("handle errors for scoops and toppings routes", async () => {
    server.use(
      rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
        res(ctx.status(500))
      ),
      rest.get("http://localhost:3030/toppings ", (req, res, ctx) =>
        res(ctx.status(500))
      )
    );

    render(<OrderEntry />);
    await waitFor(async () => {
      const alertsElements = await screen.findAllByRole("alert");
      expect(alertsElements).toHaveLength(1);
    });
  });
});
