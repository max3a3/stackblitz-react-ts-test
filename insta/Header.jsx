import * as React from 'react';

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
export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <InstaGraphic />
      <div>center</div>
      <div>right</div>
    </div>
  );
}
