const data = ['a', 'a', 'b', 'x', 'x', 'x', 'a'];

function compressArray(arr) {
  let countChars = 0;

  const compressed = arr.reduce((acc, char) => {
    let prev = acc[acc.length - 1];

    if (prev && char === prev.char) {
      prev.count++;
    } else {
      acc.push({
        char,
        count: 1
      });

      console.log(prev);
    }

    countChars++;

    return acc;
  }, []);

  console.log(compressed.pop());
  console.log('Total:', countChars);

};

compressArray(data);
