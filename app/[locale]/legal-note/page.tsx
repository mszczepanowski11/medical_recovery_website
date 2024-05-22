import TextContent from '@/app/organisms/TextContent/TextContent';
import metadata from '@/app/utils/SEO';

export async function generateMetadata() {
  return {
    title: 'Legal note',
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function LegalNote({
  params,
}: {
  params: { locale: 'en' | 'pl' | 'de' };
}) {
  return (
    <>
      <main>
        <TextContent contentKey="legal_note_page" />
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
