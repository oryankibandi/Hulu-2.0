import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/requests';

const API_KEY = process.env.API_KEY;

export default function Home(request) {
  const router = useRouter();

  const route = router.query.route;
  console.log('route >>>' + route);
  // const [request, setRequest] = useState();

  // useEffect(() => {
  //   console.log('Re-rendered page');
  //   const getMovies = async () => {
  //     if (route) {
  //       console.log('fetching movies...');
  //       const movieRequest = await fetch(
  //         `https://api.themoviedb.org/3${
  //           requests[genre]?.url || requests.fetchTrending.url
  //         }`
  //       )
  //         .then((res) => res.json())
  //         .catch((err) => console.log('Something went wrong: ' + err));
  //       getMovies();
  //       setRequest(movieRequest);
  //     }
  //   };
  // }, [route]);

  return (
    <div className=''>
      <Head>
        <title>Hulu 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Header */}
      <Header />
      {/* Navigation */}
      <Nav />
      {/* Movies */}
      <Results request={request} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  )
    .then((res) => res.json())
    .catch((err) => console.log('Something went wrong: ' + err));

  return {
    props: request,
  };
}
