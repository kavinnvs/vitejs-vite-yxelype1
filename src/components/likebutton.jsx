import { useState } from 'react';

function LikeButton({ isLiked, onToggle }) {
  return (
    <button onClick={onToggle} style={{ color: isLiked ? 'red' : 'black' }}>
      {isLiked ? '\u2764\uFE0F Liked' : '\uD83E\uDD0D Like'}
    </button>
  );
}

export default LikeButton;