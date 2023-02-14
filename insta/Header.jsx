import * as React from 'react';
import {
  HomeIcon,
  UserIcon,
  SearchIcon,
  InformationCircleIcon,
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
    <div>
      <SearchIcon className="h-5 text-gray-500" />
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
      />
    </div>
  );
}
export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <InstaGraphic />
      <div>
        <SearchBarMiddle />
      </div>
      <div>right</div>
    </div>
  );
}
