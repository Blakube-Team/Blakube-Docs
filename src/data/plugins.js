// ============================================================
//  src/data/plugins.js
//  Añade o edita plugins aquí. Se reflejan automáticamente
//  en la página principal y en el footer.
// ============================================================

export const plugins = [
  {
    id: "bk-tops",
    name: "BK-Tops",
    description: "Advanced leaderboard system with dynamic rankings, team support, smart caching and async processing for zero lag.",
    price: "Free",
    discount: null,
    originalPrice: null,
    featured: false,
    featuredLabel: "Featured",
    logo: "/brand/plugins/bk-tops-logo.png",
    banner: "/brand/plugins/bk-tops-banner.png",
    tags: [],
    // tags: ["Leaderboards", "Teams", "MySQL", "PlaceholderAPI", "Paper 1.21+"],

    // Botones de descarga — nombre y link configurables, añade los que quieras
    downloadLinks: [
      // { label: "Spigot",     href: "#" },
      { label: "Modrinth",   href: "https://modrinth.com/plugin/bk-tops" },
      { label: "BuiltByBit", href: "https://builtbybit.com/resources/bk-tops-advanced-leaderboards.93583/" },
      // { label: "Polymart", href: "https://polymart.org/..." },
    ],
  },
  {
    id: "bk-gradients",
    name: "BK-Gradients",
    description: "Full visual identity system. HEX gradient prefixes, nicks, suffixes and tags with 100% YAML-driven GUIs and live reload.",
    price: "$7.99",
    discount: null,
    originalPrice: null,
    featured: false,
    featuredLabel: "Featured",
    logo: "/brand/plugins/bk-gradients-logo.png",
    banner: "/brand/plugins/bk-gradients-banner.png",
    tags: [],

    downloadLinks: [
      { label: "BuiltByBit", href: "https://builtbybit.com/resources/bk-gradients-tags-gradient-system.88792/" },
    ],
  },
  {
    id: "bk-claims",
    name: "BK-Claims",
    description: "Ultra-high performance land protection system. Zero-lag particle borders, intuitive GUI management, and deep permission control for modern servers.",
    price: "$9.99",
    discount: null, // Puedes poner "20%" si decides ponerlo en oferta
    originalPrice: null,
    featured: true, // Lo he puesto como true para que destaque como novedad
    featuredLabel: "New Release",
    logo: "/brand/plugins/bk-claims-logo.png",
    banner: "/brand/plugins/bk-claims-banner.png",
    tags: ["Protection", "Optimization", "GUI"],
    downloadLinks: [
      { label: "BuiltByBit", href: "https://builtbybit.com/resources/bk-claims.98662/" },
    ],
  },
  {
    id: "bk-tops-notify",
    name: "BK-Tops Notify Addon",
    description: "Dynamic notification system for BK-Tops. Keep your players engaged with real-time ranking updates, personal milestones, and leaderboard change alerts.",
    price: "$2.50",
    discount: null,
    originalPrice: null,
    featured: false,
    featuredLabel: "Addon",
    logo: "/brand/plugins/bk-tops-notify-logo.png",
    banner: "/brand/plugins/bk-tops-notify-banner.png",
    tags: [],
    downloadLinks: [
      { label: "BuiltByBit", href: "https://builtbybit.com/resources/bk-tops-notify-addon.97443/" },
    ],
  },

  // ── Para añadir un nuevo plugin, copia este bloque: ──────
  // {
  //   id: "bk-nuevo",                 // coincide con src/content/docs/bk-nuevo/
  //   name: "BK-Nuevo",
  //   description: "Descripción.",
  //   price: "$4.99",
  //   discount: null, originalPrice: null,
  //   featured: false, featuredLabel: "New",
  //   logo: "/brand/bk-nuevo-logo.png",
  //   banner: "/brand/bk-nuevo-banner.jpg",
  //   tags: ["Tag1", "Tag2"],
  //   downloadLinks: [
  //     { label: "Spigot",   href: "#" },
  //     { label: "Modrinth", href: "#" },
  //   ],
  // },
];
