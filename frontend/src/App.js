import axios from 'axios';
import { useQuery } from 'react-query';

import Poll from './components/Poll';

function App() {
  // Poll data every 2 seconds
  const { isLoading, isError, data, error } = useQuery({
    queryKey: 'poll',
    queryFn: async () => {
      const res = await axios.get(
        'http://localhost:8080/polls/6421d86ad6ffa14511eff229'
      );
      return res;
    },
    refetchInterval: 1000,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[90%] md:w-[65%]">
        <Poll poll={data.data} />
      </div>
    </div>
  );
}

export default App;
