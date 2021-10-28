import faker from 'faker';
const Words = (count: number) => {
   return new Array(count)
      .fill(undefined)
      .map((_) => faker.random.word())
      .join(' ');
};
export default Words;
