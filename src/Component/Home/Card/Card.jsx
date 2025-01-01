
const Card = ({item}) => {
    const {name, image,recipe} = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image} // Replace with the actual image URL
      alt="Caesar Salad"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions flex justify-center">
      <button className="btn bg-[#E8E8E8]">Add to Cart</button>
    </div>
  </div>
</div>

    );
};

export default Card;