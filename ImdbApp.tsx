import * as React from 'react';
import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid';
import HeaderIcon from './HeaderIcon';

function Header() {
  return (
    <div className="flex justify-between items-center p-6 bg-gray-500 flex-col lg:flex-row">
      <div className="flex ">
        <HeaderIcon Icon={HomeIcon} title="Home" />
        <HeaderIcon Icon={UserIcon} title="Account" />
        <HeaderIcon Icon={PhoneIcon} title="Contact" />
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
        width={100}
        height={100}
        className="cursor-pointer active:brightness-110"
      />
    </div>
  );
}

const BAR_DATA = [{ text: 'top' }, { text: 'popular' }];
function Bar() {
  return ( <div className="flex justify-center bg-gray-600 text-gray-200 text-xl select-none lg:text-2xl">
      {BAR_DATA.map((b) => (
        <div className="m-5">{b.text}</div>
      ))}
    </div>
  );
}
export default function ImdbApp() {
  return (
    <div>
      <Header />
     <Bar/>
      <h2>content</h2>
    </div>
  );
}
