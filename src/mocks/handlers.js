import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.get("http://localhost:3000/scoops", (req, res, ctx) => {
    return res(
      ctx.status(403),
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
];
