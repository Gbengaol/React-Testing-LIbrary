import { rest } from "msw";

export const handlers = [
  // Handles a GET /scoops request
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Chocolate",
          imagePath: "/images/chocolate.png",
        },
        {
          name: "Vanilla",
          imagePath: "/images/vanilla.png",
        },
      ])
    );
  }),
  // Handles a GET /toppings request
  rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "M&Ms",
          imagePath: "/images/m-and-ms.png",
        },
        {
          name: "Hot fudge",
          imagePath: "/images/hot-fudge.png",
        },
        {
          name: "Cherries",
          imagePath: "/images/cherries.png",
        },
      ])
    );
  }),
];
