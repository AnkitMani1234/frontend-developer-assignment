import React from 'react';

const ShareButton = ({ speed }) => {
  const handleShare = () => {
    const url = `${window.location.origin}/tracking?speed=${speed}`;
    navigator.clipboard.writeText(url);
    alert('URL copied to clipboard');
  };

  return (
    <button onClick={handleShare}>Share</button>
  );
};

export default ShareButton;
