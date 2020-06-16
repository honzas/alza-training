const data = ['a', 'a', 'b', 'x', 'x', 'x', 'a'];

function compressArray(arr) {

  return arr.reduce((acc, char) => {
    let prev = acc[acc.length - 1];

    if (prev && char === prev.char) {
      prev.count++;
    } else {
      acc.push({
        char,
        count: 1
      });
    }

    return acc;
  }, []);

};

console.log(compressArray(data));
