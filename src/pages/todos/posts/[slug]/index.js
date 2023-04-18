import SEO from "components/SEO";
import { useRouter } from "next/router";

export default function sub() {
  const router = useRouter();

  console.log("router", router);

  return (
    <>
      <SEO />
      <p>sub category</p>
    </>
  );
}
