import TextContent from '@/app/organisms/TextContent/TextContent';
import ThankYouPageContent from '@/app/organisms/ThankYouPageContent/ThankYouPageContent';
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
  searchParams,
}: {
  params: { locale: 'en' | 'pl' | 'de' };
  searchParams: any;
}) {
  console.log('searchParams', searchParams);
  return (
    <>
      <main>
        <ThankYouPageContent
          locale={params.locale}
          searchParams={searchParams}
        />
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
