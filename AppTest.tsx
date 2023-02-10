import * as React from 'react';
import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid';
import HeaderIcon, { HeaderIconHack } from './HeaderIcon';
import RESULTS from './results.json';
import Card from "./Card.tsx"
function TestCard() {
  return (
    <div className="bg-white shadow-lg rounded m-8 p-8 flex md:bg-orange">
      <div className="w-1/3  sm:block">
        <img
          className="rounded-full md:border-white md:border-solid md:border-4"
          src="https://randomuser.me/api/portraits/men/44.jpg"
        />
      </div>
      <div className="sm:w-2/3 ">
        <h3 className="text-orange text-xl font-semibold md:text-white">
          Ruben Garza
        </h3>

        <p className="text-grey-dark font-thin text-sm leading-normal md:text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  );
}
function IconTest() {
  return <HeaderIcon Icon={HomeIcon} title="home" />;
}

function TestFlex() {
  return (
    <div className="flex flex-wrap">
      <div className="m-2 p-1 border-2 border-gray-500">aaaaaaaaaaaaaa</div>
      <div className="m-2 p-1 border-2 border-gray-500">
        bbbbbbbbbbbbbbbbbbb
      </div>
      <div className="m-2 p-1 border-2 border-gray-500">
        ccccccccccccccccccccc
      </div>
      <div className="m-2 p-1 border-2 border-gray-500">aaaaaaaaaaaaaaaaaa</div>
      <div className="m-2 p-1 border-2 border-gray-500">
        bbbbbbbbbbbbbbbbbbb
      </div>
      <div className="m-2 p-1 border-2 border-gray-500">cccccccccccccc</div>
    </div>
  );
}
function TestHeader() {
  return (
    <div className="bg-gray-300 items-center p-6 select-none flex flex-col justify-between sm:flex-row ">
      <div className="flex">
        <HeaderIcon Icon={HomeIcon} title="home" />
        <HeaderIcon Icon={HomeIcon} title="home" />
        <HeaderIcon Icon={HomeIcon} title="home" />
        <HeaderIcon Icon={HomeIcon} title="home" />
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
function TestContent() {
  return (
    <div className="flex">
      {RESULTS.map((r) => (
        <Card result={r}/>
      ))}
    </div>
  );
}
export default function AppTest() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {/* <TestFlex /> */}

      {/* <TestHeader /> */}
      <TestContent />
      {/* <TestCard /> */}
    </div>
  );
}
