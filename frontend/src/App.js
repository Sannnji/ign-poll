import axios from 'axios';
import { useQuery } from 'react-query';

import Poll from './components/Poll';

function App() {
  const fetchPolls = () => {
    return axios.get('http://localhost:8080/poll');
  };

  // Poll data every 2 seconds
  const { isLoading, isError, data, error } = useQuery('polls', fetchPolls, {
    refetchInterval: 2000,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[65%]">
        {data.data.map((poll) => (
          <Poll poll={poll} />
        ))}
      </div>
    </div>
  );
}

export default App;
