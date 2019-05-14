var divide = function (dividend, divisor) {
    if (dividend < -2147483648) {
      dividend = -2147483648
    }
    if (dividend > 2147483647) {
      dividend = 2147483647
    }
    if (divisor < -2147483648) {
      divisor = -2147483648
    }
    if (divisor > 2147483647) {
      divisor = 2147483647
    }
    
    let sign = Math.sign(dividend) !== Math.sign(divisor) ? 0 : 1;
    let zhengres = Math.floor(dividend / divisor);
    let fures = Math.ceil(dividend / divisor);
    
    if (zhengres < -2147483648) {
      zhengres = -2147483648
    }
    if (zhengres > 2147483647) {
      zhengres = 2147483647
    }
    if (fures < -2147483648) {
      fures = -2147483648
    }
    if (fures > 2147483647) {
      fures = 2147483647
    }
    return sign ? zhengres : fures;
  };