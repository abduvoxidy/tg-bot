import SEO from "components/SEO";
import { News } from "components/UI/News";
import { useNewsQuery } from "services/news.service";
import { newsService } from "services/news.service";
import { getResponse } from "utils/getResponse";
import { branchService } from "services/branches.service";
import { useBranchesQuery } from "services/branches.service";
import { queryClient } from "services/queryClient";
import { useNewsServerQuery } from "services/news.service";

// import { dehydrate } from "react-query";

function news({ news, branchProps }) {
  // const { data: news, isLoading } = useNewsQuery({
  //   queryParams: {
  //     initialData: newsProps,
  //   },
  // });

  return (
    <>
      <SEO />
      <News news={news} />
    </>
  );
}

export async function getServerSideProps() {
  await useNewsServerQuery();

  // don't remove this comments please, because here
  //  explanation ssr request and multpile requests on ssr
  // so here you can see initialData for requests

  // await Promise.all([
  //   queryClient.prefetchQuery(["GET_NEWS"], async () => {
  //     return await newsService
  //       .getList({})
  //       .then((res) => getResponse(res, true));
  //   }),
  //   queryClient.prefetchQuery(["GET_BRANCHES"], async () => {
  //     return await branchService.getList({}).then((res) => getResponse(res));
  //   }),
  // ]);

  return {
    props: {
      news: queryClient.getQueryData("GET_NEWS"),
      // branchProps: queryClient.getQueryState("GET_BRANCHES"),
    },
  };
}

export default news;
