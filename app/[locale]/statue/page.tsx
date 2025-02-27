import TextContent from '@/app/organisms/TextContent/TextContent';
import metadata from '@/app/utils/SEO';

export async function generateMetadata() {
  return {
    title: 'Statue - Mental Recoveryp',
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function Statue({
  params,
}: {
  params: { locale: 'en' | 'pl' | 'de' };
}) {
  return (
    <>
      <main>
        <TextContent contentKey="statue" />
      </main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(metadata[`schema${params.locale}`]),
        }}
      />
    </>
  );
}
