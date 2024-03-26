import { useTranslations } from 'next-intl';
import Header from '../components/Header/Header';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main>
      <h1>{t('title')}</h1>
      <Header />
    </main>
  );
}
