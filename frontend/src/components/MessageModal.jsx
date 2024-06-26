import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function MessageModal({
  title,
  message,
  buttonLabel,
  isOpen,
  setIsOpen,
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen((isOpen) => !isOpen)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden space-y-6 rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {/* Title */}
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>

                {/* Message */}
                <div className="">
                  <p className="text-md text-gray-500">{message}</p>
                </div>

                {/* Button */}
                <div className="">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-teal-100 px-8 py-2 text-sm font-medium text-teal-600 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                  >
                    {buttonLabel}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
