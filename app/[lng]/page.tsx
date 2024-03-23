import Header from '../components/Header/Header';
import { useTranslation } from '../i18n';

export default async function Home({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);
  console.log('t2424', t, t('test2'));
  return (
    <main>
      {/* <CalendlyWidget />
      <StripePayment /> */}
      <h1>{t('test2')}</h1>
      <Header />
    </main>
  );
}
