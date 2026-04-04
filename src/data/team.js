// ============================================================
//  src/data/team.js
//  Añade o edita miembros del equipo aquí.
// ============================================================

export const team = [
  {
    name: "Rubenchoo",
    role: "Founder",
    avatar: "/brand/rubencho-perfil.png",   // imagen en public/brand/team/ (opcional)
    avatarFallback: "RB",                  // iniciales si no hay imagen
    banner: "/brand/rubenchoo-banner.png", // banner de la tarjeta (opcional)
    roleColor: {
      bg: "rgba(245,158,11,0.12)",
      text: "#fbbf24",
      border: "rgba(245,158,11,0.25)",
    },
    bannerGradient: "linear-gradient(135deg,#F2CB41,#FF8C00)", // si no hay banner
    avatarGradient: "linear-gradient(135deg,#F2CB41,#FF8C00)", // si no hay avatar
    links: {
      twitter: "https://x.com/rubenchoo_",
      behance: "https://www.behance.net/rubenchoo",
      discord: "rubenchoo",               // username para copiar
    },
  },
  {
    name: "RtxJean",
    role: "Lead Developer",
    avatar: "/brand/jean-avatar.png",
    avatarFallback: "JN",
    banner: "/brand/rtxjean-banner.png",
    roleColor: {
      bg: "rgba(43,127,255,0.12)",
      text: "#2B7FFF",
      border: "rgba(43,127,255,0.25)",
    },
    bannerGradient: "linear-gradient(135deg,#0d1a3a,#1a3a6a)",
    avatarGradient: "linear-gradient(135deg,#2B7FFF,#00d4ff)",
    links: {
      twitter: "https://x.com/rtxjean",
      github: "https://github.com/rtxjean",
      discord: "rtxjean",
    },
  },
  {
    name: "Hhitt",
    role: "Lead Developer",
    avatar: "/brand/Hit.jpg",
    avatarFallback: "JN",
    banner: "/brand/rtxjean-banner.jpg",
    roleColor: {
      bg: "rgba(43,127,255,0.12)",
      text: "#2B7FFF",
      border: "rgba(43,127,255,0.25)",
    },
    bannerGradient: "linear-gradient(135deg,#0d1a3a,#1a3a6a)",
    avatarGradient: "linear-gradient(135deg,#2B7FFF,#00d4ff)",
    links: {
      twitter: "https://x.com/hhitt",
      github: "https://github.com/hhitt",
      discord: "hhitt",
    },
  },
  {
    name: "Kaizen",
    role: "Support",
    avatar: "/brand/team/kaizen.jpg",
    avatarFallback: "KZ",
    banner: "/brand/team/kaizen-banner.jpg",
    roleColor: {
      bg: "rgba(22,163,74,0.12)",
      text: "#4ade80",
      border: "rgba(22,163,74,0.25)",
    },
    bannerGradient: "linear-gradient(135deg,#0d2a1a,#1a5a2d)",
    avatarGradient: "linear-gradient(135deg,#16a34a,#4ade80)",
    links: {
      twitter: "https://x.com/bkkaizen",
      github: "https://github.com/bkkaizen",
      discord: "bkkaizen",
    },
  },

  // ── Para añadir un miembro, copia este bloque: ───────────
  // {
  //   name: "Nombre",
  //   role: "Rol",
  //   avatar: "/brand/team/nombre.jpg",
  //   avatarFallback: "NM",
  //   banner: "/brand/team/nombre-banner.jpg",
  //   roleColor: { bg: "rgba(43,127,255,0.12)", text: "#2B7FFF", border: "rgba(43,127,255,0.25)" },
  //   bannerGradient: "linear-gradient(135deg,#0d1a3a,#1a3a6a)",
  //   avatarGradient: "linear-gradient(135deg,#2B7FFF,#00d4ff)",
  //   links: {
  //     twitter: "https://x.com/usuario",
  //     github: "https://github.com/usuario",
  //     discord: "usuario",
  //   },
  // },
];
