import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="uppercase text-stone-200 bg-stone-800">
      <p className="font-semibold text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
