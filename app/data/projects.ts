export type TagKey =
  | "PNNL"
  | "ASI"
  | "Bestway"
  | "College"
  | "Freelance"
  | "SideProject"
  | "featured"
  | "archives";

export interface TagConfig {
  tag: TagKey;
  slug: string;
  title: string;
  subHeader: string;
  blurb: string;
}

export const TAG_CONFIGS: Record<string, TagConfig> = {
  pnnl: {
    tag: "PNNL",
    slug: "PNNL",
    title: "PNNL",
    subHeader: "Pacific Northwest National Laboratory",
    blurb:
      "Scientific software, cybersecurity log visualizers, and design systems developed for the US Department of Energy and CISA.",
  },
  asi: {
    tag: "ASI",
    slug: "ASI",
    title: "Autonomous Solutions, Inc.",
    subHeader: "Industrial Robotics & Autonomous Vehicles",
    blurb:
      "Software suites, command & control interfaces, design systems, and corporate branding for industrial autonomous robotics.",
  },
  bestway: {
    tag: "Bestway",
    slug: "Bestway",
    title: "Bestway",
    subHeader: "Packaging & Consumer Goods",
    blurb:
      "Packaging rebrands, product graphics, and promotional marketing for consumer summer products and outdoor recreation gear.",
  },
  college: {
    tag: "College",
    slug: "College",
    title: "College Work",
    subHeader: "University of Georgia (Graphic Design BFA)",
    blurb:
      "Selected university coursework, branding studies, packaging concepts, and illustration projects from the University of Georgia.",
  },
  freelance: {
    tag: "Freelance",
    slug: "Freelance",
    title: "Freelance",
    subHeader: "Client Design & Contract Projects",
    blurb:
      "Product design, mobile app concepts, identity development, and technical illustration created for various commercial clients.",
  },
  sideproject: {
    tag: "SideProject",
    slug: "SideProject",
    title: "Side Projects",
    subHeader: "Personal Apps, Plugins & Experiments",
    blurb:
      "Open source tools, software plugins, creative photography, and prototype applications built outside of client work.",
  },
  featured: {
    tag: "featured",
    slug: "featured",
    title: "Featured Work",
    subHeader: "Key Case Studies & Flagship Projects",
    blurb:
      "In-depth case studies and major software engineering and UX projects.",
  },
  archives: {
    tag: "archives",
    slug: "archives",
    title: "Archive Portfolio",
    subHeader: "Historical Projects & Case Studies",
    blurb:
      "A comprehensive archive of design portfolio projects, mobile apps, branding, and artwork migrated from Gatsby.",
  },
};

export interface Project {
  slug: string;
  title: string;
  date: string;
  description: string;
  headerImage: string | null;
  tags: TagKey[];
  href: string;
}

export const ALL_PROJECTS: Project[] = [
  // --- PNNL / FEATURED ---
  {
    slug: "RedEye",
    title: "RedEye",
    date: "2020 - 2024",
    description:
      "A Red Team C2 Log Visualization tool to display complex data, evaluate mitigation strategies, and enable effective decision making in response to a Red Team assessment.",
    headerImage: "/lfs-media/Hero/RedEyeHero-01-BackgroundGrid.png",
    tags: ["featured", "PNNL"],
    href: "/work/RedEye",
  },
  {
    slug: "Hydropower-eLibrary",
    title: "Hydropower eLibrary",
    date: "2020 - 2024",
    description:
      "A searchable repository of FERC licensed hydropower projects, FERC documents, and an interactive map of US hydropower installations.",
    headerImage: "/lfs-media/Hero/HydroELibraryHero-01-Background.png",
    tags: ["featured", "PNNL"],
    href: "/work/Hydropower-eLibrary",
  },
  {
    slug: "IrrigationViz",
    title: "IrrigationViz",
    date: "2021 - 2023",
    description:
      "A pre-engineering estimation tool for Irrigation District Managers to quickly model their district, propose infrastructure upgrades, and compare project costs with stakeholders.",
    headerImage: "/lfs-media/Hero/IrrigationVizHero-01-Map.png",
    tags: ["featured", "PNNL"],
    href: "/work/IrrigationViz",
  },

  // --- ASI ---
  {
    slug: "mobius-design-system",
    title: "Mobius Design System",
    date: "2018-03-08",
    description:
      "A design system created for Autonomous Solutions' Mobius robotics command and control software suite.",
    headerImage:
      "/lfs-media/mobius-design-system/mobius-design-system_00-header-3.svg",
    tags: ["archives", "ASI"],
    href: "/work/mobius-design-system",
  },
  {
    slug: "mobius-ux-audit",
    title: "Mobius UX Audit",
    date: "2018-04-08",
    description:
      "A comprehensive UX audit and redesign strategy for Mobius robotics software.",
    headerImage:
      "/lfs-media/mobius-ux-audit/Mobius-v7-vs-v8-6-Interaction-States-Old.svg",
    tags: ["archives", "ASI"],
    href: "/work/mobius-ux-audit",
  },
  {
    slug: "mobius-command-software",
    title: "Mobius Command Software",
    date: "2017-10-20",
    description:
      "Command and control interface design for managing fleets of autonomous industrial vehicles.",
    headerImage: "/lfs-media/mobius-command-software/Mobius-v8-header.png",
    tags: ["archives", "ASI"],
    href: "/work/mobius-command-software",
  },
  {
    slug: "mobius-icon-system",
    title: "Mobius Icon System",
    date: "2017-11-08",
    description:
      "A unified icon system designed for industrial robotics touchscreen and desktop software.",
    headerImage:
      "/lfs-media/mobius-icon-system/Mobius_Icon-System-header.svg",
    tags: ["archives", "ASI"],
    href: "/work/mobius-icon-system",
  },
  {
    slug: "mobius-mapbuilder-software",
    title: "Mobius Mapbuilder Software",
    date: "2017-09-18",
    description:
      "Software allowing operators to map haulage routes, geofences, and operational zones for autonomous vehicles.",
    headerImage:
      "/lfs-media/mobius-mapbuilder-software/Mobius_Mapbuilder-1.png",
    tags: ["archives", "ASI"],
    href: "/work/mobius-mapbuilder-software",
  },
  {
    slug: "mobius-pathbuilder-software",
    title: "Mobius Pathbuilder Software",
    date: "2017-09-13",
    description:
      "Interactive path planning tool for generating vehicle navigation trajectories in complex industrial environments.",
    headerImage:
      "/lfs-media/mobius-pathbuilder-software/Mobius_Pathbuilder-Steps-01.png",
    tags: ["archives", "ASI"],
    href: "/work/mobius-pathbuilder-software",
  },
  {
    slug: "mobius-reporting-software",
    title: "Reporting Software",
    date: "2017-07-08",
    description:
      "Analytics and reporting dashboard for vehicle utilization, fuel consumption, and operational efficiency.",
    headerImage: "/lfs-media/mobius-reporting-software/Reporting_header.png",
    tags: ["archives", "ASI"],
    href: "/work/mobius-reporting-software",
  },
  {
    slug: "asi-branding-and-marketing",
    title: "ASI Branding & Marketing",
    date: "2016-03-14",
    description:
      "Various promotional marketing materials including brochures, business cards, custom folders, trade show booth design, document templates, and infographics.",
    headerImage:
      "/lfs-media/asi-branding-and-marketing/ASI-Print-Media_header.jpg",
    tags: ["archives", "ASI"],
    href: "/work/asi-branding-and-marketing",
  },
  {
    slug: "asi-website-navigation",
    title: "ASI Website Navigation",
    date: "2016-03-01",
    description:
      "Interactive navigation menu and site header system for the Autonomous Solutions corporate website featuring a built-in contact modal.",
    headerImage:
      "/lfs-media/asi-website-navigation/ASI-Website_header-00.png",
    tags: ["archives", "ASI"],
    href: "/work/asi-website-navigation",
  },

  // --- BESTWAY ---
  {
    slug: "bestway-packaging-rebrand",
    title: "Bestway Packaging Rebrand",
    date: "2013-12-06",
    description:
      "A comprehensive rebranding of Bestway's summer collection package design, specially adapted to current retail market competition.",
    headerImage:
      "/lfs-media/bestway-packaging-rebrand/bestway-packaging_header.jpg",
    tags: ["archives", "Bestway"],
    href: "/work/bestway-packaging-rebrand",
  },
  {
    slug: "bestway-promotional-materials",
    title: "Bestway Promotional Materials",
    date: "2013-08-23",
    description:
      "Trade show promotional and marketing materials for Bestway's corporate booth.",
    headerImage:
      "/lfs-media/bestway-promotional-materials/bestway-promotional_header.jpg",
    tags: ["archives", "Bestway"],
    href: "/work/bestway-promotional-materials",
  },
  {
    slug: "pavillo-camping-gear",
    title: "Pavillo Camping Gear",
    date: "2014-05-11",
    description:
      "Package design, product photography direction, and line architecture for the Pavillo outdoor and camping line.",
    headerImage: "/lfs-media/pavillo-camping-gear/pavillo_header.jpg",
    tags: ["archives", "Bestway"],
    href: "/work/pavillo-camping-gear",
  },
  {
    slug: "stand-up-paddleboards",
    title: "Stand Up Paddleboards",
    date: "2013-09-28",
    description:
      "Graphic deck patterns, accessory packaging, and marketing collaterals for Bestway inflatable SUP line.",
    headerImage: "/lfs-media/stand-up-paddleboards/bestway-SUP_header.jpg",
    tags: ["archives", "Bestway"],
    href: "/work/stand-up-paddleboards",
  },

  // --- COLLEGE ---
  {
    slug: "willoughby-and-crane",
    title: "Willoughby & Crane",
    date: "2014-12-05",
    description:
      "An identity and packaging design project for a premium craft gin brand.",
    headerImage: "/lfs-media/willoughby-and-crane/willoughby-crane_header.jpg",
    tags: ["archives", "College"],
    href: "/work/willoughby-and-crane",
  },
  {
    slug: "perfect-cloud",
    title: "Perfect Cloud",
    date: "2014-03-28",
    description:
      "A cloud-based SaaS platform identity, dashboard UI concepts, and collateral design.",
    headerImage: "/lfs-media/perfect-cloud/perfect-cloud_header.png",
    tags: ["archives", "College"],
    href: "/work/perfect-cloud",
  },
  {
    slug: "nancys-bistro-and-bakery",
    title: "Nancy's Bistro & Bakery",
    date: "2014-04-16",
    description:
      "Comprehensive restaurant identity system including menu design, food packaging, and signage.",
    headerImage:
      "/lfs-media/nancys-bistro-and-bakery/Nancys-Bistro-Bakery_header.jpg",
    tags: ["archives", "College"],
    href: "/work/nancys-bistro-and-bakery",
  },
  {
    slug: "caffeine-machine",
    title: "Caffeine Machine",
    date: "2013-05-20",
    description:
      "Final capstone project for the BFA Graphic Design program at UGA: a mobile coffee truck brand identity.",
    headerImage: "/lfs-media/caffeine-machine/caffeine-machine_header.jpg",
    tags: ["archives", "College"],
    href: "/work/caffeine-machine",
  },
  {
    slug: "earth-week",
    title: "Earth Week",
    date: "2013-04-22",
    description:
      "Promotional materials for University of Georgia's Earth Week events including logos, posters, flyers, and social media.",
    headerImage: "/lfs-media/earth-week/uga-earth-week_header.jpg",
    tags: ["archives", "College"],
    href: "/work/earth-week",
  },
  {
    slug: "illustration",
    title: "Illustration",
    date: "2013-05-20",
    description:
      "Advanced Illustration at University of Georgia: graphite, eraser, scanned textures, and digital color overlays.",
    headerImage:
      "/lfs-media/illustration/James-Bradford-Illustration_Rooster.jpg",
    tags: ["archives", "College"],
    href: "/work/illustration",
  },
  {
    slug: "uga-cycling-team-uniforms",
    title: "UGA Cycling Team Uniforms",
    date: "2012-09-18",
    description:
      "Custom racing kit and apparel design for the University of Georgia collegiate cycling team.",
    headerImage: "/lfs-media/uga-cycling-team-uniforms/uga-cycling_header.png",
    tags: ["archives", "College"],
    href: "/work/uga-cycling-team-uniforms",
  },
  {
    slug: "blue-heron-brewery",
    title: "Blue Heron Brewery",
    date: "2012-03-26",
    description:
      "A craft brewery brand study focusing on hand-drawn logo development and bottle packaging application.",
    headerImage: "/lfs-media/blue-heron-brewery/blue-heron-brewery_header.jpg",
    tags: ["archives", "College"],
    href: "/work/blue-heron-brewery",
  },

  // --- FREELANCE ---
  {
    slug: "autonomous-cleaning-app",
    title: "Autonomous Cleaning App",
    date: "2017-11-08",
    description:
      "App designed to enable one user to monitor and manage several autonomous cleaning vehicles simultaneously with multi-vehicle telemetry.",
    headerImage: "/lfs-media/autonomous-cleaning-app/Cleaning-App_Mobile.mp4",
    tags: ["archives", "Freelance"],
    href: "/work/autonomous-cleaning-app",
  },
  {
    slug: "scientific-illustration",
    title: "Scientific Illustration",
    date: "2017-05-13",
    description:
      "Precision vector diagrams and pedagogical infographics created for peer-reviewed agricultural and entomological publications.",
    headerImage:
      "/lfs-media/scientific-illustration/Pesticide-Routes-1-Larval-Ingestion.svg",
    tags: ["archives", "Freelance"],
    href: "/work/scientific-illustration",
  },
  {
    slug: "fox-outfitters",
    title: "FOX outfitters",
    date: "2014-05-25",
    description:
      "Initial branding, logo design, packaging, and ecommerce website mockup for a new line of outdoor camping goods.",
    headerImage: "/lfs-media/fox-outfitters/fox-outfitters_header.png",
    tags: ["archives", "Freelance"],
    href: "/work/fox-outfitters",
  },
  {
    slug: "lumitronics",
    title: "Lumitronics",
    date: "2014-04-08",
    description:
      "Logo and package design for an ecommerce-based commercial and recreational vehicle lighting company.",
    headerImage: "/lfs-media/lumitronics/lumitronics_header.png",
    tags: ["archives", "Freelance"],
    href: "/work/lumitronics",
  },
  {
    slug: "solo-stove",
    title: "Solo Stove",
    date: "2014-04-14",
    description:
      "Packaging layout, instructional diagrams, and graphic assets for the Solo Stove portable camp stove.",
    headerImage: "/lfs-media/solo-stove/solo-stove_header.jpg",
    tags: ["archives", "Freelance"],
    href: "/work/solo-stove",
  },
  {
    slug: "e-flame",
    title: "e-Flame",
    date: "2014-03-01",
    description:
      "E-commerce media for an electric fireplace product line including icons, technical dimension diagrams, and web marketing.",
    headerImage: "/lfs-media/e-flame/eFlame_header.png",
    tags: ["archives", "Freelance"],
    href: "/work/e-flame",
  },
  {
    slug: "athens-skateboards",
    title: "Athens Skateboards",
    date: "2011-10-10",
    description:
      "Custom deck illustrations and screenprint graphics for the Skate Shop of Athens.",
    headerImage:
      "/lfs-media/athens-skateboards/Skateshop-of-Athens_header.png",
    tags: ["archives", "Freelance"],
    href: "/work/athens-skateboards",
  },

  // --- SIDE PROJECT ---
  {
    slug: "avymap-avalanche-safety-mobile-app",
    title: "AvyMap: Avalanche Safety Mobile App",
    date: "2019-02-01",
    description:
      "A prototype app for backcountry skiers to visualize avalanche danger potential of any slope using terrain data and slope angle shading.",
    headerImage:
      "/lfs-media/avymap-avalanche-safety-mobile-app/AvyMap_header-2.png",
    tags: ["archives", "SideProject", "featured"],
    href: "/work/avymap-avalanche-safety-mobile-app",
  },
  {
    slug: "wordpress-syntax-highlighter-plugin",
    title: "WordPress Syntax Highlighter Plugin",
    date: "2019-01-20",
    description:
      "An open-source WordPress admin plugin adding a modern IDE syntax highlighter for HTML, CSS, and JS editor fields.",
    headerImage:
      "/lfs-media/wordpress-syntax-highlighter-plugin/html-syntax-highlighter-wordpress-plugin_header.jpg",
    tags: ["archives", "SideProject"],
    href: "/work/wordpress-syntax-highlighter-plugin",
  },
  {
    slug: "travel-photography",
    title: "Travel Photography",
    date: "2018-12-18",
    description:
      "A collection of 35mm and digital travel photography from journeys across Japan, Taiwan, and the Pacific Northwest.",
    headerImage:
      "/lfs-media/travel-photography/James-Bradford-Travel-Photo-Japan-2.jpg",
    tags: ["archives", "SideProject"],
    href: "/work/travel-photography",
  },
  {
    slug: "spirit-animal-vector-art",
    title: "Spirit Animal Vector Art",
    date: "2012-09-06",
    description:
      "Geometric vector art series and screen-printed calendar featuring stylized animal portraits.",
    headerImage:
      "/lfs-media/spirit-animal-vector-art/2013-animal-calendar_header.png",
    tags: ["archives", "SideProject"],
    href: "/work/spirit-animal-vector-art",
  },
];

export function getAllProjects(): Project[] {
  return ALL_PROJECTS;
}

export function getProjectsByTag(tag: string): Project[] {
  const normalizedTag = tag.toLowerCase();
  return ALL_PROJECTS.filter((project) =>
    project.tags.some((t) => t.toLowerCase() === normalizedTag)
  );
}

export function getTagConfig(tag: string): TagConfig | undefined {
  const normalizedTag = tag.toLowerCase();
  return TAG_CONFIGS[normalizedTag];
}

export function getAllTags(): TagConfig[] {
  return Object.values(TAG_CONFIGS);
}
