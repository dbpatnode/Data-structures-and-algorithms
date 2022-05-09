// to run different cases switch out console log at bottom with different pools and  press control + option + N

const pool1 = '8111111111111111181111111111111111';
const pool2 = '1234567890987654321234567890987654321';
const pool3 = '0';
const pool4 = '';
const pool5 = '811';
const pool6 = '811111111111811111111111811111111111811111111111';

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

console.log(numOfIds(pool3));
