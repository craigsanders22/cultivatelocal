// Each article is one markdown file in this folder.
// Front matter: title, description, date (YYYY-MM-DD). Add `draft: true` to hide one.
export default {
  layout: "layouts/post.njk",
  permalink: (data) => (data.draft ? false : `/resources/${data.page.fileSlug}/`),
};
