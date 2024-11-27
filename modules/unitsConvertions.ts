export function celsiusToFarenheit(degrees: string | string[]) {
  const farenheit = Number(degrees) * 9/5 + 32;
  return Math.round(farenheit);
}

export function kilometersToMiles(distance: string | string[]) {
  const miles = Number(distance) * 0.6211371;
  return Math.round(miles);
}

export function usdToEur(price: string | string[]) {
  const usd = Number(price) * 0.95;
  return Math.round(usd);
}