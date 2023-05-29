import { useRouter } from "next/router";

const ArticlePage = () => {
  const router = useRouter();

  const { query } = router;

  return <section> {query.slug} </section>;
};

export default ArticlePage;
