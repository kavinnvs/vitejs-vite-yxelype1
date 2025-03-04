import LikeButton from '/LikeButton';

function PostCard({ post, onLikeToggle }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <img src={post.profileImage} alt={post.username} style={{ width: '50px', borderRadius: '50%' }} />
      <h3>{post.username}</h3>
      <p>{post.content}</p>
      <LikeButton isLiked={post.isLiked} onToggle={() => onLikeToggle(post.id)} />
    </div>
  );
}

export default PostCard;