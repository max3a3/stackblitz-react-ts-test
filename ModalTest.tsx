import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { tmdbList } from './tmdb-utils';

export default function ModalTest() {
  let [isOpen, setIsOpen] = React.useState(false);
  let [keys, setKeys] = React.useState({});

  function closeModal() {
    setIsOpen(false);
    localStorage.setItem('private-keys', JSON.stringify(keys));
  }

  function openModal() {
    setIsOpen(true);
  }

  React.useEffect(() => {
    setKeys(JSON.parse(localStorage.getItem('private-keys') || '{}'));
  }, []);
  return (
    <React.Fragment>
      <div className="fixed inset-0 flex items-center justify-center bg-blue-200">
        <button
          type="button"
          onClick={openModal}
          className="m-2 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
        >
          Keys
        </button>
        <button
          type="button"
          onClick={async () => {
            let resp = await tmdbList();
            console.log(resp.results[0]);
          }}
          className="m-2 px-4 py-2 text-sm font-medium text-white bg-blue-800 rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
        >
          tmdb
        </button>
      </div>

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          {/* the background */}
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          {/* center the dialog */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Keys
                  </Dialog.Title>

                  <div className="m-2 text-sm text-gray-500 border-t pt-2">
                    keys from local storage
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      for="username"
                    >
                      Tmdb key
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                      value={keys['TMDB']}
                      onChange={(event) =>
                        setKeys({ ...keys, TMDB: event.target.value })
                      }
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      for="username"
                    >
                      imdb key
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                      value={keys['IMDB']}
                      onChange={(event) =>
                        setKeys({ ...keys, IMDB: event.target.value })
                      }
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 duration-300"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  );
}
