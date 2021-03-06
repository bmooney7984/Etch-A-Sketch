function makeGrid(boxesPerSide) {
  if (boxesPerSide > 100) {
    boxesPerSide = 100;
  }
  const gridBox = document.querySelector('div');

  clearGridBox();

  for (let i = 1; i <= boxesPerSide; i++) {
    const container = document.createElement('div');
    container.classList.add('container');
    gridBox.append(container);
  }

  const containers = document.querySelectorAll('.container');
  containers.forEach(function(container) {
    for (let i = 1; i <= boxesPerSide; i++) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('etchable');
      container.append(newDiv);
    }
  });
}

function makeEtchable(box) {
  box.addEventListener('mouseenter', function() {
    if (box.style['background-color']) {
      const colorValueEnd = box.style['background-color'].indexOf(',');
      let colorValue = box.style['background-color'].slice(4, colorValueEnd);
      colorValue = Number(colorValue);
      box.style.cssText = `background-color: rgb(${(colorValue - 26).toString()}, ${(colorValue - 26).toString()}, ${(colorValue - 26).toString()});`;
    } else {
      box.style.cssText = 'background-color: rgb(229, 229, 229)';
    }
  });
}

function addTrail() {
  const etchables = document.querySelectorAll('.etchable');
  etchables.forEach(function(etchable) {
    makeEtchable(etchable);
  });
}

function addReset() {
  button = document.querySelector('button');

  button.addEventListener('click', function() {
    const boxesPerSide = window.prompt('Number of squares per side (max 100):', '16');
    makeGrid(boxesPerSide);
    addTrail();
  });
}

function clearGridBox() {
  const containers = document.querySelectorAll('.gridBox div');
  containers.forEach(function(container) {
    container.remove();
  })
}

makeGrid(16);

addTrail();

addReset();
