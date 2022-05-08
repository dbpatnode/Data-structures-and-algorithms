const string1 = '8111111111111111181111111111111111';
const string2 = '1234567890987654321234567890987654321';
const string3 = '0';
const string4 = '';
const string5 = '811';
const string6 = '811111111111811111111111811111111111811111111111';

const numOfIds = (pool) => {
  let eightCount = 0;
  const poolArray = pool.split('');

  poolArray.forEach((el) => {
    if (el === '8') {
      eightCount = eightCount + 1;
      return eightCount;
    }
  });

  if (!pool.includes('8')) {
    return '0';
  } else if (eightCount >= Math.floor(pool.length / 11)) {
    return Math.floor(pool.length / 11);
  } else {
    return '1';
  }
};

console.log(numOfIds(pool1));
