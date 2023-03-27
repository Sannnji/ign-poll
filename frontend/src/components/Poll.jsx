import { useState } from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import PollOptions from './PollOptions';
import MessageModal from './MessageModal';

export default function Poll({ poll }) {
  const [selectedOption, setselectedOption] = useState();
  const [hasVoted, setHasVoted] = useState(
    localStorage.getItem('vote') === null ? false : true
  );
  const [seeResults, setSeeResults] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: async (vote) => {
      const res = axios.post('http://localhost:8080/poll/update', vote);
      return res;
    },
  });

  // Calculate the total amount of votes
  const totalVoteCount = () => {
    let count = 0;
    poll.options.forEach((option) => {
      count += option.count;
    });
    return count;
  };

  return (
    <div
      key={poll._id}
      className="flex flex-col rounded-2xl p-7 bg-[#283044] text-white shadow-2xl"
    >
      {/* Poll Title */}
      <h1 className="font-bold text-3xl md:text-4xl">{poll.name}</h1>
      <hr className="mt-4 border-[#59626F]" />

      {/* Poll Options */}
      <PollOptions
        hasVoted={hasVoted}
        totalVoteCount={() => totalVoteCount()}
        seeResults={seeResults}
        selectedOption={selectedOption}
        setSelectedOption={setselectedOption}
        options={poll.options}
      />

      {/* Form Buttons */}
      <div className="flex w-full justify-between items-center">
        {!hasVoted ? (
          <>
            <button
              className={`${
                seeResults ? 'bg-slate-500 text-white' : 'bg-white text-black'
              }  font-bold text-lg py-2 min-w-[126px] sm:w-60 rounded-xl`}
              disabled={seeResults}
              onClick={() => {
                if (selectedOption) {
                  mutation.mutate({
                    id: poll._id,
                    change: {
                      vote: {
                        for: selectedOption,
                      },
                    },
                  });
                  localStorage.setItem("vote", selectedOption)
                  setTimeout(() => {
                    setHasVoted(true);
                  }, 1200);
                } else {
                  setIsOpen(true);
                }
              }}
            >
              Answer
            </button>

            {/* If user clicks show results */}
            {seeResults ? (
              <button
                className="flex items-center space-x-1"
                onClick={() => {
                  setSeeResults(false);
                }}
              >
                <ChevronLeftIcon className="w-6 h-6" />
                <p>Go Back</p>
              </button>
            ) : (
              <button
                className="flex items-center space-x-1"
                onClick={() => {
                  setSeeResults(true);
                }}
              >
                <p>See Result</p>
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            )}
          </>
        ) : (
          // Display if vote is submitted 
          <>
            <p>Thanks you 🎉</p>
            <p>{totalVoteCount()} votes</p>
          </>
        )}
      </div>

      {/* Display modal if user tries to submit without selecting an option */}
      <MessageModal
        title={'Error'}
        message={'Please select an option before submitting your vote'}
        buttonLabel={'Exit'}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}
