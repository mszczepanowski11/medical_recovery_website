import { useLocale } from 'next-intl';
import Header from '../organisms/Header/Header';
import Hero from '../organisms/Hero/Hero';
import WeHelp from '../organisms/WeHelp/WeHelp';

export default async function Home() {
  const locale = useLocale();
  const messagesItem = await import(`../../messages/${locale}`);
  console.log('messagesItem', messagesItem.we_help.cards);
  // const messages = messagesItem.json();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <WeHelp cards={messagesItem.we_help.cards}/>
      </main>
    </>
  );
}
