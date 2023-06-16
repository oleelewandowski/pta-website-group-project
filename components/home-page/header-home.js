import Image from 'next/image';
import styles from './header-home.module.css';
import useTranslation from 'next-translate/useTranslation';

const HeaderHome = () => {
  const { t } = useTranslation('home-page');

  const tasks = [
    t('tasks.first'),
    t('tasks.second'),
    t('tasks.third'),
    t('tasks.fourth'),
  ];

  return (
    <header className={styles.header}>
      <div className={styles.background} />
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src='/images/pta-logo/logo.jpg'
            width='113'
            height='129'
            alt=''
          />
          <div className={styles.title}>
            <h1>{t('title')}</h1>
            <h2>{t('subtitle')}</h2>
          </div>
        </div>
        <div className={styles.text}>
          <p>{t('introduction')}</p>
          <p>{t('tasks.description')}</p>
          <ul>
            {tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
          <p>{t('members')}</p>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
