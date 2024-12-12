import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex-shrink-0">
      <img
        src="https://i.imgur.com/kez1tXP.png"
        alt="Nasmat Al Rahma"
        className="h-12 w-auto"
      />
    </Link>
  );
}