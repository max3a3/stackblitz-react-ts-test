import * as React from 'react';
import {
  HomeIcon,
  UserIcon,
  SearchIcon,
  PlusCircleIcon,
} from '@heroicons/react/solid';

function InstaGraphic() {
  return (
    <React.Fragment>
      <div className="w-32 hidden lg:inline-grid">
        <img
          src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
          className="object-contain"
        />
      </div>
      <div className="w-10 lg:hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
          className="object-contain"
        />
      </div>
    </React.Fragment>
  );
}
function SearchBarMiddle() {
  return (
    <div className="relative mt-1">
      <div className="absolute top-2 left-2">
        <SearchIcon className="h-5 text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-100 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
      />
    </div>
  );
}
function CurrentUser({ currentUser }) {
  const userImg =
    'https://us-east-1.linodeobjects.com/kinopio-uploads/ALsQ92JFiAqwpiz0Fnovf/a-malamute-husky-looking-at-you-in-a-gra-6rZ.jpg';
  return (
    <div className="flex">
      <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out" />
      <img
        src={userImg}
        alt="user-image"
        className="h-10 rounded-full cursor-pointer"
      />
    </div>
  );
}
function HeaderRight({ currentUser }) {
  return (
    <div className="flex">
      <HomeIcon className="h-5" />
      {currentUser && <CurrentUser currentUser={currentUser} />}
    </div>
  );
}
export default function Header() {
  let [currentUser, setCurrentUser] = React.useState(true);
  return (
    <div>
      <div className="flex items-center justify-between">
        <InstaGraphic />
        <SearchBarMiddle />
        <HeaderRight currentUser={currentUser} />
      </div>

      <div>
        <button onClick={() => setCurrentUser((s) => !s)}>[login]</button>
      </div>
    </div>
  );
}
