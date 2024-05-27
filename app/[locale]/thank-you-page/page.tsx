import TextContent from '@/app/organisms/TextContent/TextContent';
import metadata from '@/app/utils/SEO';

export async function generateMetadata() {
  return {
    title: 'Thank You for meeting! - Mental Recovery',
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function ThankYouPage({
  params,
}: {
  params: { locale: 'en' | 'pl' | 'de' };
}) {
  return (
    <>
      <main>Thank You</main>
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
