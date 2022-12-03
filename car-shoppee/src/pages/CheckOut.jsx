import React from 'react'

function CheckOut() {
  return (

    <div className="checkout">
         <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Your cart</span>
                    <span className="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                        <h6 className="my-0">Product name</h6>
                        <small className="text-muted">Brief description</small>
                        </div>
                        <span className="text-muted">$12</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                        <h6 className="my-0">Second product</h6>
                        <small className="text-muted">Brief description</small>
                        </div>
                        <span className="text-muted">$8</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                        <h6 className="my-0">Third item</h6>
                        <small className="text-muted">Brief description</small>
                        </div>
                        <span className="text-muted">$5</span>
                    </li>
                    
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong>$20</strong>
                    </li>
                    </ul>

                    
                </div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">CHECKOUT</h4>
                    <form className="needs-validation" novalidate>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                        <label for="firstName" className="form-label">First name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                        <div className="invalid-feedback">
                            Valid first name is required.
                        </div>
                        </div>
                        <div className="col-md-6 mb-3">
                        <label for="lastName" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                        <div className="invalid-feedback">
                            Valid last name is required.
                        </div>
                        </div>
                    </div>
                    
                   
                        
                      

                    <div className="mb-3">
                        <label for="username" className="form-label">Username</label>
                        <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input type="text" className="form-control" id="username" placeholder="Username" required />
                        <div className="invalid-feedback">
                            Your username is required.
                        </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="FName" className="form-label">FName</label>
                        <input type="FName" className="form-control" id="FName" placeholder="First Name" />
                        
                    </div>
                    <div className="mb-3">
                        <label for="LName" className="form-label">LName</label>
                        <input type="LName" className="form-control" id="LName" placeholder="Last Name" />
                        
                    </div>


                    <div className="mb-3">
                        <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                        <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                        <div className="invalid-feedback">
                        Please enter your shipping address.
                        </div>
                    </div>

                    <hr className="mb-4" />
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="same-address" />
                        <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="save-info" />
                        <label className="form-check-label" for="save-info">Save this information for next time</label>
                    </div>
                    <hr className="mb-4" />

                    <h4 className="mb-3">Payment</h4>

                    <div className="d-block my-3">
                        <div className="form-check">
                        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
                        <label className="form-check-label" for="credit">Credit card</label>
                        </div>
                        <div className="form-check">
                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                        <label className="form-check-label" for="debit">Debit card</label>
                        </div>
                        <div className="form-check">
                        <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                        <label className="form-check-label" for="paypal">Paypal</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                        <label for="cc-name" className="form-label">Name on card</label>
                        <input type="text" className="form-control" id="cc-name" placeholder="" required />
                        <small className="text-muted">Full name as displayed on card</small>
                        <div className="invalid-feedback">
                            Name on card is required
                        </div>
                        </div>
                        <div className="col-md-6 mb-3">
                        <label for="cc-number" className="form-label">Credit card number</label>
                        <input type="text" className="form-control" id="cc-number" placeholder="" required />
                        <div className="invalid-feedback">
                            Credit card number is required
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-3">
                        <label for="cc-expiration" className="form-label">Expiration</label>
                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                        <div className="invalid-feedback">
                            Expiration date required
                        </div>
                        </div>
                        <div className="col-md-3 mb-3">
                        <label for="cc-expiration" className="form-label">CVV</label>
                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                        <div className="invalid-feedback">
                            Security code required
                        </div>
                        </div>
                    </div>
                    <hr className="mb-4" />
                    <button className="btn btn-dark px-4 rounded-pill" type="button">Place Order</button>
                    </form>
                </div>
                </div>
            </div>
            </section>
         
        </div>
      
    )
  }


  


export default CheckOut