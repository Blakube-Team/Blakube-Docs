// ============================================================
//  src/data/promo.js
//  Banner publicitario / promo que aparece entre secciones.
//  Ponlo donde quieras en el index.astro.
// ============================================================

export const promo = {
  enabled: true,                          // false = oculta el banner completamente

  // Contenido
  logo:        "/brand/promo-logo.png",   // logo a la izquierda (opcional, null si no quieres)
  title:       "BK-Gradients",
  description: "The ultimate cosmetics plugin for your server. Prefixes, nicks, suffixes & tags with full HEX gradient support.",

  // Botones (puedes añadir o quitar los que quieras)
  buttons: [
    { label: "Buy Now",    href: "https://builtbybit.com/resources/bk-gradients-tags-gradient-system.88792/", primary: true  },
    { label: "Learn More", href: "/bk-gradients/intro/introduction/",              primary: false },
  ],

  // Precio (opcional, null para ocultar)
  price:         "$7.99",
  originalPrice: "null",               // null si no hay descuento
  discount:      "null",             // null si no hay descuento

  // Imagen de fondo del banner (opcional)
  banner: "/brand/plugins/bk-gradients-banner",

  // Colores del banner
  gradientDark:  "linear-gradient(135deg, #0a0f1e 0%, #0d1a3a 50%, #0a0f1e 100%)",
  gradientLight: "linear-gradient(135deg, #e8f0ff 0%, #c8d8ff 50%, #e8f0ff 100%)",
};
