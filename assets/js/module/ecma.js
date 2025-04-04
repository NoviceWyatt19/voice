const clap = () => {
  console.log();
  console.log('👏👏👏👏👏👏👏👏👏👏');
  console.log();
}

const odd = 'odd number';
const even = 'even number';
const wyatt = {
  username: 'wyatt',
  age: 123
}

let count = 0;

const counter = () => {
  count++;
  console.dir(count);
}

export {odd, even, wyatt, counter};
export default clap;
