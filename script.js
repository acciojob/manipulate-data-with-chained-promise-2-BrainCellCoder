// Function that returns a promise which resolves with an array after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Start the promise chain
getNumbers()
  .then((numbers) => {
    return new Promise((resolve) => {
      // Filter out odd numbers
      const evenNumbers = numbers.filter((num) => num % 2 === 0);
      setTimeout(() => {
        document.getElementById("output").textContent = `Even Numbers: ${evenNumbers.join(", ")}`;
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      // Multiply all even numbers by 2
      const multipliedNumbers = evenNumbers.map((num) => num * 2);
      setTimeout(() => {
        document.getElementById("output").textContent = `Multiplied Numbers: ${multipliedNumbers.join(", ")}`;
        resolve(multipliedNumbers);
      }, 2000);
    });
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
