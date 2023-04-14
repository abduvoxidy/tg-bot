import SEO from "components/SEO";
import { useRouter } from "next/router";

export default function categories() {
  const router = useRouter();

  console.log("router", router);

  return (
    <>
      <SEO />
      <h1>Slug </h1>
      <button
        onClick={() => {
          router.push("/[...slug]", "/todos/post-1");
        }}
      >
        Click me
      </button>
    </>
  );
}
