const increment = (Number) => {
  return {
    type: 'INCREMENT',
      payload: Number,
  };
};

const decrement = (number) => {
  return {
    type: 'DECREMENT',
    payload: number,
  };
};

export { increment, decrement };