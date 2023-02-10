import * as React from 'react';
import { ThumbUpIcon } from '@heroicons/react/outline';

// todo type the result data

const BASE_URL = 'https://image.tmdb.org/t/p/original';

export default function Card({ result }) {
  return (
    <div>
      <img src={BASE_URL + result.poster_path} width={200} height={100} />
      <div>
        <p>{result.overview}</p>
        <p>
          <ThumbUpIcon />
        </p>
      </div>
    </div>
  );
}
