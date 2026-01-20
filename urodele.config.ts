export const config = {
  github: {
    login: "muzhuyu", // github login name, not user name
    repo: "muzhuyu.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "muzhuyu",
    brand: "Urodele",
    description: "A self-owned full-static blog system",
  },
  footer: {
    copyright: "© muzhuyu",
    copyrightUrl: "https://muzhuyu.com",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
