import { parseHashOptions } from "../../../lib/browser";

export const isDark = () => {
  const options = parseHashOptions(location.hash);
  const isGrowth = isGrowthNeedDark();
  const isLandPage = window.location.pathname === ("/");
  const isMyStudio = window.location.pathname.startsWith("/studio");
  const isResearch = window.location.pathname.startsWith("/research") || window.location.pathname.startsWith("/public/research");
  const isPublicDashboardNight = options?.theme === 'night' && window.location.pathname.startsWith("/public/dashboard");
  return isLandPage || isGrowth || isResearch || isMyStudio || isPublicDashboardNight;
};

export const canShowDarkMode = dashboard => {
  return dashboard?.creator?.id === 15671 || isDark();
};

export const isGrowthNeedDark = () => {
  return (
    window.location.pathname === "/growth" ||
    window.location.pathname.startsWith("/growth/project")||
    window.location.pathname.startsWith("/growth/@")||
    window.location.pathname.startsWith("/growth/public")||
    window.location.pathname.startsWith("/growth/guest")||
    window.location.pathname.startsWith("/growth/pricing")||
    window.location.pathname.startsWith("/growth/submit")||
    window.location.pathname.startsWith("/growth/dashboard")||
    window.location.pathname.startsWith("/growth/chart")||
    window.location.pathname.startsWith("/growth/campaign")
  );
};

export const isStudio = () => window.location.pathname.startsWith("/studio");
