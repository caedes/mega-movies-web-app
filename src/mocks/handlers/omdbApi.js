import { rest } from "msw";

import omdbApiJson from "../fixtures/omdbApi.json";

export const omdbApiHandlers = [
  rest.get("//www.omdbapi.com", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(omdbApiJson));
  }),
];
