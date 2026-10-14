const images = import.meta.glob("./image/*", {
  eager: true,
  query: "?url",
  import: "default",
});

export const img = (name) => images[`./image/${name}`] ?? "";