import CartList from "../components/CartList";
import DataForm from "../components/DataForm";

const Cart = () =>
{

  return (
    <main>
      <div>
        <div>
          <DataForm />
        </div>
        <CartList/>
      </div>
    </main>
  );
};

export default Cart;
