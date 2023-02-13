import { Main } from 'components/UI/Main/Main'
import SEO from 'components/SEO'
import { fetchMultipleUrls } from 'services/fetchMultipleUrls'

export default function Home({ data }) {
  return (
    <>
      <SEO />
      <Main />
    </>
  )
}

// export async function getServerSideProps(context) {
//   const urls = ['/posts']
//   const data = await fetchMultipleUrls(urls)

//   return {
//     props: {
//       data
//     }
//   }
// }
