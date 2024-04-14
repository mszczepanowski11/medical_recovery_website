import { useLocale } from 'next-intl';
import Header from '../organisms/Header/Header';
import Hero from '../organisms/Hero/Hero';
import WeHelp from '../organisms/WeHelp/WeHelp';
import OurSpecialist from '../organisms/OurSpecialist/OurSpecialist';
import { getSpecialistData } from '../utils/fetchData';

export default async function Home({
  params,
}: {
  params: { locale: 'en' | 'pl' | 'de' };
}) {
  const locale = useLocale();
  const messagesItem = await import(`../../messages/${locale}`);

  const specialistsList = await getSpecialistData();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <WeHelp cards={messagesItem.we_help.cards} />
        <OurSpecialist
          locale={params.locale}
          specialistsList={specialistsList}
        />
      </main>
    </>
  );
}
