import React from 'react';

const GithubIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.4.1-.3.6-1.6-.1-3.4 0 0-1.2-.4-3.9 1.7a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9c-.7 1.8-.2 3.1-.1 3.4-1 1-1.5 2-1.5 3.4 0 5 3 6.2 6 6.5-1.2.3-1.6 1.4-1.8 2.2V22" />
    <path d="M9 20c-5 1.5-5-2.5-7-3" />
  </svg>
);

export default GithubIcon;
