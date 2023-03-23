import React from 'react';

export default function Poll({ poll }) {
  return (
    <div
      key={poll.name}
      className="flex flex-col border rounded-xl p-6 bg-[#283044] text-white"
    >
      <h1 className="font-bold text-4xl">{poll.name}</h1>
      <hr className="my-2 border-[#59626F]" />

      <fieldset>
        {poll.options.map((option) => (
          <label
            key={option.name}
            className="poll-container"
            htmlFor={option.name}
          >
            {option.name}
            <input
              id={option.name}
              className="form-radio"
              type="radio"
              name="status"
            />
            <span className="checkmark" />
          </label>
        ))}
      </fieldset>

      <div className="flex w-full justify-between items-center mt-6">
        <button className="rounded-xl font-bold bg-white text-black py-2 px-14">
          Answer
        </button>

        <button>See Result {'>'}</button>
      </div>
    </div>
  );
}
