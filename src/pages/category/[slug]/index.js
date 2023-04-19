import { Category } from "components/Pages/Category";
import SEO from "components/SEO";
import { useRouter } from "next/router";

export default function sub() {
  const router = useRouter();

  console.log("router", router);

  return (
    <>
      <SEO />
      <Category />
    </>
  );
}
