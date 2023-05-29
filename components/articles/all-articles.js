import ArticlesGrid from "./articles-grid";
import styles from "./all-articles.module.css";

const DUMMY_ARTICLES = [
  {
    id: 1,
    title: "The Benefits of Regular Exercise",
    content:
      "Regular exercise has numerous benefits for both the body and the mind. It helps improve cardiovascular health, strengthen muscles and bones, and boost the immune system. Exercise also releases endorphins, which are natural mood enhancers, helping to reduce stress and anxiety. Additionally, regular physical activity can improve sleep quality and contribute to maintaining a healthy weight.",
    slug: "benefits-of-regular-exercise",
    image: "test-article-1.jpg",
    date: "2023-05-28",
    snippet:
      "Regular exercise has numerous benefits for both the body and the mind. It helps improve cardiovascular health, strengthen muscles and bones, and boost the immune system.",
  },
  {
    id: 2,
    title: "Tips for Effective Time Management",
    content:
      "Effective time management is crucial for productivity and achieving goals. Here are some tips to improve time management skills:\n\n1. Prioritize tasks: Identify and prioritize important tasks to focus on the most crucial ones first.\n2. Set goals: Set specific and achievable goals to stay motivated and track progress.\n3. Create a schedule: Use calendars or planners to plan and allocate time for each task or activity.\n4. Minimize distractions: Avoid distractions such as excessive phone use or social media during work or study time.\n5. Take breaks: Allow short breaks to rest and recharge, which can actually enhance productivity.\n\nBy implementing these time management techniques, individuals can enhance efficiency and make the most of their time.",
    slug: "tips-for-effective-time-management",
    image: "test-article-2.jpg",
    date: "2023-05-27",
    snippet:
      "Effective time management is crucial for productivity and achieving goals. Here are some tips to improve time management skills...",
  },
  {
    id: 3,
    title: "Exploring the Wonders of Nature",
    content:
      "Nature offers a wide range of wonders and benefits. Spending time in nature can have a positive impact on physical and mental well-being. It provides opportunities for relaxation, stress reduction, and improved mood. Nature walks or hikes can help increase physical activity while enjoying the beauty of the outdoors. Additionally, connecting with nature can foster a sense of awe and appreciation for the world around us. Whether it's exploring national parks, gardening, or simply taking a moment to enjoy a sunset, nature has a way of rejuvenating and inspiring us.",
    slug: "exploring-the-wonders-of-nature",
    image: "test-article-3.jpg",
    date: "2023-05-26",
    snippet:
      "Nature offers a wide range of wonders and benefits. Spending time in nature can have a positive impact on physical and mental well-being.",
  },
  {
    id: 4,
    title: "The Importance of Proper Nutrition",
    content:
      "Proper nutrition plays a vital role in maintaining good health and well-being. It provides the body with essential nutrients, vitamins, and minerals necessary for growth, development, and optimal functioning. A balanced diet that includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats is important for overall health. Good nutrition supports a strong immune system, helps prevent chronic diseases, and promotes healthy weight management. It is also linked to improved cognitive function and better mood. Making informed food choices and adopting healthy eating habits are key to reaping the benefits of proper nutrition.",
    slug: "importance-of-proper-nutrition",
    image: "test-article-4.png",
    date: "2023-05-25",
    snippet:
      "Proper nutrition plays a vital role in maintaining good health and well-being. It provides the body with essential nutrients, vitamins, and minerals necessary for growth, development, and optimal functioning.",
  },
];

const AllArticles = () => {
  return (
    <section className={styles.articles}>
      <ArticlesGrid articles={DUMMY_ARTICLES} />
    </section>
  );
};

export default AllArticles;
