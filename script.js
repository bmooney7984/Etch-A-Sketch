function makeGrid() {
  const gridBox = document.querySelector('div');

  for (let i = 1; i <= 16; i++) {
    const container = document.createElement('div');
    container.classList.add('container');
    gridBox.append(container);
  }

  const containers = document.querySelectorAll('.container');
  containers.forEach(function(container) {
    for (let i = 1; i <= 16; i++) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('etchable');
      container.append(newDiv);
    }
  });
}

makeGrid();
