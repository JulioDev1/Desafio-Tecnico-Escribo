function numbers(number) {
  const array = [];
  const initial = 0;
  for (let i = number - 1; i > 0; --i) {
    if (i % 5 == 0 || i % 3 == 0) {
      array.push(i);
    }
  }
  console.log(array);
  const sum = array.reduce(
    (acumulator, currentValue) => acumulator + currentValue,
    initial
  );
  return sum;
}
/// input 10, expect :3, 5, 6 e 9 output 23
console.log(numbers(10));
/// input 11, expect :3, 5, 6, 9, 10 output 33
console.log(numbers(11));
