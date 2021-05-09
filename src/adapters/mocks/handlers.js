import { rest } from "msw";

import mockLaunchesResp from "./mockLaunchesResponse.json";
import mockRocketsResp from "./mockRocketsResponse.json";

const handlers = [
  rest.get("https://api.spacexdata.com/v4/rockets", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockRocketsResp));
  }),
  rest.get("https://api.spacexdata.com/v4/launches", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockLaunchesResp));
  }),
];

export default handlers;
