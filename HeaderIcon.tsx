import * as React from 'react';
export default function HeaderIcon({
  Icon,
  title,
}: {
  Icon: any;
  title: string;
}) {
  return (
    <div
      className="mx-4 flex flex-col cursor-pointer text-gray-800
      hover:text-white 
      active:text-red-400 
      lg:mx-6"
    >
      <Icon className="h-8" />
      <p className="my-2">{title}</p>
    </div>
  );
}

// remove flex flex-col
export function HeaderIconHack({ Icon, title }: { Icon: any; title: string }) {
  return (
    <div
      className="mx-4  cursor-pointer 
      text-red
      hover:text-white 
      active:text-red-400 
      lg:mx-6"
    >
      <Icon className="h-8" />
      <p className="my-2">{title}</p>
    </div>
  );
}
