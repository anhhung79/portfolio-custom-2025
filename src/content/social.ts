export const social = [
  { url: "mailto:hunga4858@gmail.com", name: "mail" },
  { url: "https://www.facebook.com/boxi.booo/", name: "facebook" },
] as const satisfies { url: string; name: "mail" | "facebook" }[];
