import { Router, createRoute, createRootRoute } from "@tanstack/react-router";

import RootLayout from "./shared/layout/RootLayout";
import LandingPage from "./features/landing/LandingPage";
import WeatherPage from "./features/weather/WeatherPage";
import CurrencyPage from "./features/currency/CurrencyPage";
import NewsPage from "./features/news/NewsPage";

const rootRoute = createRootRoute({
  component: RootLayout,
});

const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
});

const weatherRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/weather",
  component: WeatherPage,
});

const currencyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/currency",
  component: CurrencyPage,
});

const newsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/news",
  component: NewsPage,
});

const routeTree = rootRoute.addChildren([
  landingRoute,
  weatherRoute,
  currencyRoute,
  newsRoute,
]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
