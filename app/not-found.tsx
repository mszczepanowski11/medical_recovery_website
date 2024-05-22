import { useTranslations } from 'next-intl';
import { Colors } from './utils/constans';

export const dynamic = 'force-dynamic';

function NotFoundPage() {
  const t = useTranslations('not_found');
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        marginBottom: '10vh',
        padding: '1rem',
      }}
    >
      <p
        style={{
          color: Colors.text_tags,
          fontSize: '4rem',
          fontWeight: 800,
          margin: 0,
          textAlign: 'center',
        }}
      >
        4
        <span style={{ color: Colors.background_purple, textAlign: 'center' }}>
          0
        </span>
        4
      </p>
      <h1
        style={{
          color: Colors.background_interactive_hover,
          textAlign: 'center',
        }}
      >
        {t('title')}
      </h1>
      <a
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '3rem',
          marginTop: '2rem',
          padding: '0 1rem',
          borderRadius: '1.5rem',
          backgroundColor: Colors.background_interactive_hover,
          color: Colors.text_primary,
          fontSize: '1.2rem',
          fontWeight: 500,
        }}
      >
        {t('back_btn')}
      </a>
    </main>
  );
}

export default NotFoundPage;
