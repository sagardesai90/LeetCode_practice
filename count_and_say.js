const countAndSay = n => {
    if (n === 1) {
      return "1";
    }
    const result = countAndSay(n - 1);
    const store = [];
    for (let index = 0; index < result.length; index++) {
      const currentChar = result[index];
      let count = 1;
      while (index < result.length - 1 && result[index] === result[index + 1]) {
        count++;
        index++;
      }
      store.push(count + "");
      store.push(currentChar);
    }
  
    return store.join("");
  };