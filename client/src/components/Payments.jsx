import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch} from "react-redux";

import { handleToken } from "../actions";

const TakeMoney = () => {
  const dispatch = useDispatch();

  const onToken = async (token) => {
    await dispatch(handleToken(token));
  };

  return (
    <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={onToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn btn-primary white indigo-text">
        Add Credits
      </button>
    </StripeCheckout>
  )
};

export default TakeMoney;
