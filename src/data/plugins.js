// ============================================================
//  src/data/plugins.js
//  Añade o edita plugins aquí. Se reflejan automáticamente
//  en la página principal, el carrusel y el footer.
// ============================================================

export const plugins = [
  {
    id: "bk-tops",                          // debe coincidir con la carpeta en src/content/docs/
    name: "BK-Tops",
    description: "Advanced leaderboard system with dynamic rankings, team support, smart caching and async processing for zero lag.",
    price: "Free",                          // "Free" o "$7.99"
    logo: "/brand/bk-tops-logo.png",        // imagen en public/brand/
    banner: "/brand/bk-tops-banner.jpg",    // imagen en public/brand/
    tags: ["Leaderboards", "Teams", "MySQL", "PlaceholderAPI", "Paper 1.21+"],
    links: {
      spigot: "#",                          // reemplaza con URL real
      modrinth: "https://modrinth.com/organization/blakube",
      builtbybit: "https://builtbybit.com/members/blakube.364216/",
    },
  },
  {
    id: "bk-gradients",
    name: "BK-Gradients",
    description: "Full visual identity system. HEX gradient prefixes, nicks, suffixes and tags with 100% YAML-driven GUIs and live reload.",
    price: "$7.99",
    logo: "/brand/bk-gradients-logo.png",
    banner: "/brand/bk-gradients-banner.jpg",
    tags: ["Cosmetics", "MiniMessage", "SQLite", "MySQL", "Paper 1.21+"],
    links: {
      spigot: "#",
      modrinth: "https://modrinth.com/organization/blakube",
      builtbybit: "https://builtbybit.com/members/blakube.364216/",
    },
  },

  // ── Para añadir un nuevo plugin, copia este bloque: ──────
  // {
  //   id: "bk-nuevo",                       // debe coincidir con src/content/docs/bk-nuevo/
  //   name: "BK-Nuevo",
  //   description: "Descripción del plugin.",
  //   price: "$4.99",
  //   logo: "/brand/bk-nuevo-logo.png",
  //   banner: "/brand/bk-nuevo-banner.jpg",
  //   tags: ["Tag1", "Tag2"],
  //   links: {
  //     spigot: "#",
  //     modrinth: "#",
  //     builtbybit: "#",
  //   },
  // },
];
