import React, { Component } from "react";
export default class CartItem extends Component {
    render() {
    const { id, title, img, price, total, count } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;

        return (
            <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img
                src={img}
                style={{ width: "5rem", heigth: "5rem" }}
                className="img-fluid"
                alt=""
                />
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
                <span className="d-lg-none">product :</span> {title}
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
                <strong>
                <span className="d-lg-none">price :</span> &#x20B9;{price}
                </strong>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
                <div className="d-flex justify-content-center">
                <div>
                    <span
                    className="btn btn-black mx-1"
                    onClick={() => decrement(id)}
                    >
                    -
                    </span>
                    <span className="btn btn-black mx-1">{count}</span>
                    <span
                    className="btn btn-black mx-1"
                    onClick={() => increment(id)}
                    >
                    +
                    </span>
                </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
                <div className=" cart-icon" onClick={() => removeItem(id)}>
                <i className="fas fa-trash" />
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2 ">
                <strong>item total : &#x20B9;{total} </strong>
            </div>
            </div>
        );
    }
}