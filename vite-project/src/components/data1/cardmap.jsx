import { Carddata } from './cardata';

const Card3data = () => {
  return (
    <div className="flex flex-col mx-auto">
        
      {Carddata.map(post => (
      <card3 key={post.title} post={post} />
      ))}
        
    </div>
  );
};

export default Card3data;
