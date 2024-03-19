import { createEvent, createStore } from "effector";

export const $counter = createStore<number>(112);

export const decrementCounter = createEvent();

export const incrementCounter = createEvent();

export const randomCounter = createEvent();

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$counter
  .on(incrementCounter, (state) => state + 1)
  .on(randomCounter, (state) =>  getRandomInt(-100, 200)
  /*Math. random() * (200 - (-100)) + (-100)*/)
  .on(decrementCounter, (state) => state - 1);




