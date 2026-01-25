import content from "../../../public/content.json";

import {
  IconAssembly,
  IconBuildingBridge,
  IconCloudCog,
  IconDatabase,
  IconFilters,
  IconRefreshDot,
} from "@tabler/icons-react";

const ICON_MAP: Record<string, any> = {
  IconBuildingBridge,
  IconFilters,
  IconAssembly,
  IconCloudCog,
  IconDatabase,
  IconRefreshDot,
};

export const services = content.services.map((s) => ({
  ...s,
  icon: ICON_MAP[s.icon],
}));

export const {
  customerStories,
  caseStudies,
  blogPosts,
  team,
  openPositions,
  stats,
} = content;
