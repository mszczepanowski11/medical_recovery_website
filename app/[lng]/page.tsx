import Header from '../components/Header/Header';
import { useTranslation } from '../i18n';

export default async function Home({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);

  return (
    <main>
      <h1>{t('test2')}</h1>
      <Header />
    </main>
  );
}
