function getRandomColor() {
  const colors = ['Red', 'Green', 'Violet'];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function showResult() {
  const result = getRandomColor();
  document.getElementById('result').innerText = 'Result: ' + result;
}