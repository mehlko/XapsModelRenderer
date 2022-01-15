//todo
//ids
//highlight
//extended example
//docu

console.log('hello!');

var exampleModel = {
  processes: [
    {
      name: 'Sensor Assembly',
      id: 'test',
      inputs: [{ name: 'testI', id: 'test' }],
      outputs: [{ name: 'testO', id: 'test' }],
      reousces: [{ name: 'testR', id: 'test' }],
      measurements: [{ name: 'testM', id: 'test' }],
      constraints: [{ name: 'testC', id: 'test' }],
    },
  ],
};
 
function render(model, highlightIds) {
  var container = document.createElement('div');

  //foreach process
  for (var processId in exampleModel.processes) {
    const process = exampleModel.processes[processId];
    console.log(processId, exampleModel.processes[processId]);

    //create process
    var processRendered = renderElement(
      process.id,
      'process',
      null,
      highlightIds
    );
    container.appendChild(processRendered);

    //add process name
    var processName = document.createElement('div');
    processName.className = 'name';
    processName.append(document.createTextNode(process.name));
    processRendered.appendChild(processName);

    //create input container
    var renderedInputs = document.createElement('div');
    renderedInputs.className = 'inputs';
    processRendered.appendChild(renderedInputs);
    //foreach input
    for (var inputId in process.inputs) {
      const input = process.inputs[inputId];
      var renderedInput = renderElement(
        input.id,
        'product',
        input.name,
        highlightIds
      );
      renderedInputs.appendChild(renderedInput);
    }
  }
  return container;
}

function renderElement(id, className, text, highlightIds) {
  var element = document.createElement('div');
  element.className = className;
  if (highlightIds && highlightIds.includes(id)) {
    element.classList.add('highlight');
  }
  element.append(document.createTextNode(text));
  return element;
}

var container = document.getElementById('dynamic');
var renderedModel = render(exampleModel, ['test']);
container.appendChild(renderedModel);
