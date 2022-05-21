import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";


export const Counter = () => {
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <span>{counter}</span>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
}