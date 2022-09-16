import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../shere/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L1b9uAW02sEs2eFqZYg1H3qKbEJVkPQC0P1uTbrFO3D8dUwxPCrAiVYHOZdBT26OMNq3envTLGVRCyx5qA75Br200PIJSjcIR"
);
const Payment = () => {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: payment,
  } = useQuery(["repoData", id], () =>
    fetch(`https://secret-brook-35937.herokuapp.com/order/${id}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  const { prodcutNmae, price, quantity } = payment;

  return (
    <div>
      <div class="card max-w-lg bg-base-200 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{prodcutNmae}</h2>
          <p>Qauntity : {quantity}</p>
          <p> Total Price : $ {price}</p>
        </div>
        <div class="my-3  px-8">
          <Elements stripe={stripePromise}>
            <CheckoutForm payment={payment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
<h1>hello</h1>;
