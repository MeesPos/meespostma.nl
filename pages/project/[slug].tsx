import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DefaultLayout from "../../layouts/default";

export default function Project() {
  return (
    <DefaultLayout>
      <div></div>
    </DefaultLayout>
  );
}

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact", "pages"])),
      // Will be passed to the page component as props
    },
  };
}
