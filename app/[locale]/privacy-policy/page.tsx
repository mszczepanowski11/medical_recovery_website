import PrivacyPolicyContent from '@/app/organisms/PrivacyPolicyContent/PrivacyPolicyContent';
import metadata from '@/app/utils/SEO';

export async function generateMetadata() {
  return {
    title: 'Privacy policy',
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function Home({
  params,
}: {
  params: { locale: 'en' | 'pl' | 'de' };
}) {
  return (
    <>
      <main>
        <PrivacyPolicyContent />
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
