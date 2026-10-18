export default {
  layout: "layouts/project.njk",
  permalink: (data) => `/work/${data.page.fileSlug}/`,
  eleventyComputed: {
    slug: (data) => data.page.fileSlug,
  },
};
