export function random(seed = 1000, min = 0) {
  return min + parseInt(Math.random() * seed + "", 10);
}
