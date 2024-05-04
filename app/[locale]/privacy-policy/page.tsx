import PrivacyPolicyContent from '@/app/organisms/PrivacyPolicyContent/PrivacyPolicyContent';

export async function generateMetadata() {
  return {
    title: 'Privacy policy',
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function Home() {
  return (
    <main>
      <PrivacyPolicyContent />
    </main>
  );
}
