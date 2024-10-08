function fibonacci(num) {
  if (num < 0) {
        return "Input should be a non-negative integer";
    }
    if (num === 0) return 0;
    if (num === 1 || num === 2) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;
