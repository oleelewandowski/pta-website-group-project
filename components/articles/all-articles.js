import ArticlesGrid from './articles-grid';
import styles from './all-articles.module.css';
import Spinner from 'react-spinner';
import { useArticles } from '@/hooks/articles';
import useTranslation from 'next-translate/useTranslation';
import ErrorHandler from '../ui/error-handlers/error-occured';
import { ARTCILE_TYPE_FEATURED } from '@/constants/api-constants';

const AllArticles = () => {
  const { data, isLoading, error } = useArticles(ARTCILE_TYPE_FEATURED);
  const { t } = useTranslation('home-page');

  return (
    <section className={styles.articles}>
      <div className={styles.wrapper}>
        <h2>{t('articles')}</h2>
        {!!error ? <ErrorHandler error={error} /> : null}
        {isLoading ? (
          <Spinner className={styles.spinner} />
        ) : (
          <ArticlesGrid articles={data?.articles} />
        )}
      </div>
    </section>
  );
};

export default AllArticles;
