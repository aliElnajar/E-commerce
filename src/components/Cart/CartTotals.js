import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/cart_context";
import { useUserContext } from "../../context/user_context";
import { formatPrice } from "../../utils/helpers";
import { submitCart } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
const CartTotals = () => {
  const { total_amount, shipping_fee, cart, clearCart } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  const navigate = useNavigate();
  const submitHandler = () => {
    submitCart(cart, myUser);
    navigate("/");
    clearCart();
  };
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal:<span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <button to="/checkout" className="btn" onClick={submitHandler}>
            confirm the operation
          </button>
        ) : (
          <button className="btn" type="button" onClick={loginWithRedirect}>
            login
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;