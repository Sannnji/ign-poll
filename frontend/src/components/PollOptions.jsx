import CountUp from 'react-countup';

export default function PollOptions({
  hasVoted,
  totalVoteCount,
  seeResults,
  selectedOption,
  setSelectedOption,
  options,
}) {
  const calcVotePercent = (voteCount, totalVoteCount, returnPercent) => {
    if (returnPercent === true) {
      const percentage =
        Math.round((voteCount / totalVoteCount()) * 100 * 10) / 10;
      return percentage.toString() + '%';
    } else {
      return Math.round((voteCount / totalVoteCount()) * 100 * 10) / 10;
    }
  };

  // Find the option with the highest vote count
  const findLeadingOption = () => {
    let countArr = [];
    options.forEach((option) => {
      countArr.push(option.count);
    });

    return Math.max(...countArr);
  };

  return (
    <fieldset className="space-y-4 my-8">
      {options.map((option) => (
        // Option Container
        <div
          key={option.name}
          className={`flex items-center justify-between ${
            hasVoted || seeResults ? null : 'cursor-pointer'
          }`}
          onClick={() => {
            if (!hasVoted && seeResults) {
            } else if (!hasVoted) {
              setSelectedOption(option.name);
            }
          }}
        >
          <div className="flex items-center  w-full">
            {/* Radio Button */}
            <div
              className={`absolute border-[2.5px] w-7 h-7 rounded-full ${
                hasVoted || seeResults
                  ? 'border-slate-500 bg-slate-500'
                  : 'border-white'
              }`}
            >
              {selectedOption === option.name ? (
                // Checkmark
                <div
                  className={`flex justify-center items-center w-full h-full rounded-full ${
                    hasVoted || seeResults ? 'bg-slate-500' : 'bg-white'
                  }`}
                >
                  <div className="w-3 h-3 bg-teal-300 rounded-full" />
                </div>
              ) : null}
            </div>

            {/* Option Name && Percentage Bar */}
            <div className="relative w-full pl-11">
              {/* Option Name */}
              <p
                className={`text-base sm:text-lg ${
                  hasVoted || seeResults ? 'text-slate-500' : 'text-white'
                } `}
              >
                {option.name}
              </p>

              {/* Percentage Bar */}
              {hasVoted || seeResults ? (
                <div
                  style={{
                    width: calcVotePercent(option.count, totalVoteCount, true),
                  }}
                  className={`percent-bar absolute h-[2px] ${
                    option.count === findLeadingOption()
                      ? 'bg-white'
                      : 'bg-slate-500'
                  }`}
                />
              ) : null}
            </div>

            {/* Percentage Display */}
            {hasVoted || seeResults ? (
              <p className="font-bold text-xl text-right">
                <CountUp
                  end={calcVotePercent(option.count, totalVoteCount)}
                  duration={1}
                  decimals={1}
                />
                %
              </p>
            ) : null}
          </div>
        </div>
      ))}
    </fieldset>
  );
}
