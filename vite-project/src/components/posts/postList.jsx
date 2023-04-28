import PostBox from './postBox';
import { posts } from './posts';
// import Card1 from '../data1/card1';

const PostsList = () => {
  return (
    <div className="flex flex-col mx-auto">
        
      {posts.map(post => (
      <PostBox key={post.title} post={post} />
      ))}
        {/* <Card1 /> */}
    </div>
  );
};

export default PostsList;
