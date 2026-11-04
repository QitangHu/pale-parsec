interface PostModule {
  url: string;
  frontmatter: {
    title: string;
    pubDate: string;
  };
}

const posts = import.meta.glob<PostModule>('../pages/posts/*.md', {
  eager: true,
});

export const allPosts = Object.values(posts).sort(
  (first, second) =>
    Date.parse(second.frontmatter.pubDate) -
    Date.parse(first.frontmatter.pubDate),
);
