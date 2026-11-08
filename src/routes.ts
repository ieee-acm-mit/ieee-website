import { type RouteConfig, index, route } from "@react-router/dev/routes";
export default [
  index("pages/HomePage.tsx"),
  route("about", "pages/AboutPage.tsx"),
  route("event", "pages/EventPage.tsx"),
  route("team", "pages/TeamPage.tsx"),
] satisfies RouteConfig;
