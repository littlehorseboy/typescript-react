export default function promise(): Promise<unknown> {
  return new Promise((resolve): void => {
    setTimeout(() => {
      resolve('peanut butter');
    }, 1000);
  });
}
