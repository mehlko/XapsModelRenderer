//this js code renders the example models from below and highlights the ids given in highlightIds

var exampleModel = {
  processes: [
    {
      name: 'Sensor Assembly',
      id: 'Sensor Assembly',
      inputs: [
        { name: 'Sensor', id: 'Sensor' },
        { name: 'Screw', id: 'Screw' },
        { name: 'Case', id: 'Case' },
      ],
      outputs: [{ name: 'Assembled Sensor', id: 'Assembled Sensor' }],
      resources: [
        { name: 'Placer', id: 'Placer' },
        { name: 'Screwer', id: 'Screwer' },
      ],
      measurements: [
        { name: 'Screwer Force', id: 'Screwer Force' },
        { name: 'Position X', id: 'Position X' },
        { name: 'Position Y', id: 'Position Y' },
      ],
      constraints: [{ name: 'Max Screwer Force', id: 'Max Screwer Force' }],
    },
  ],
};

var highlightIds = ['Sensor Assembly', 'Screwer Force'];

function render(model, highlightIds) {
  var container = document.createElement('div');

  //foreach process
  for (var processId in model.processes) {
    const process = model.processes[processId];
    console.log(processId, model.processes[processId]);
    //create process
    var processRendered = renderElement(
      process.id,
      'process',
      null,
      highlightIds
    );
    if (highlightIds && highlightIds.includes(process.id)) {
      processRendered.classList.add('highlight');
    }
    container.appendChild(processRendered);

    //add process name
    var processName = document.createElement('div');
    processName.className = 'name';
    processName.append(document.createTextNode(process.name));
    processRendered.appendChild(processName);

    //create input container
    var inputsRendered = document.createElement('div');
    inputsRendered.className = 'inputs';
    processRendered.appendChild(inputsRendered);
    //foreach input
    for (var inputId in process.inputs) {
      const input = process.inputs[inputId];
      var inputRendered = renderElement(
        input.id,
        'product',
        input.name,
        highlightIds
      );
      inputsRendered.appendChild(inputRendered);
    }
    //create output container
    var outputsRendered = document.createElement('div');
    outputsRendered.className = 'outputs';
    processRendered.appendChild(outputsRendered);
    //foreach output
    for (var outputId in process.outputs) {
      const output = process.outputs[outputId];
      var outputRendered = renderElement(
        output.id,
        'product',
        output.name,
        highlightIds
      );
      outputsRendered.appendChild(outputRendered);
    }
    //create resource container
    var resourcesRendered = document.createElement('div');
    resourcesRendered.className = 'resources';
    processRendered.appendChild(resourcesRendered);
    //foreach resource
    for (var resourceId in process.resources) {
      const resource = process.resources[resourceId];
      var resourceRendered = renderElement(
        resource.id,
        'resource',
        resource.name,
        highlightIds
      );
      resourcesRendered.appendChild(resourceRendered);
    }
    //create measurement container
    var measurementsRendered = document.createElement('div');
    measurementsRendered.className = 'measurements';
    processRendered.appendChild(measurementsRendered);
    //foreach measurement
    for (var measurementId in process.measurements) {
      const measurement = process.measurements[measurementId];
      var measurementRendered = renderElement(
        measurement.id,
        'measurement',
        measurement.name,
        highlightIds
      );
      measurementsRendered.appendChild(measurementRendered);
    }
    //create constraint container
    var constraintsRendered = document.createElement('div');
    constraintsRendered.className = 'constraints';
    processRendered.appendChild(constraintsRendered);
    //foreach constraint
    for (var constraintId in process.constraints) {
      const constraint = process.constraints[constraintId];
      var constraintRendered = renderElement(
        constraint.id,
        'constraint',
        constraint.name,
        highlightIds
      );
      constraintsRendered.appendChild(constraintRendered);
    }
  }

  return container;
}

//helper function to render an element
function renderElement(id, className, text, highlightIds) {
  var element = document.createElement('div');
  element.className = className;
  //highlight element if id matches
  if (highlightIds && highlightIds.includes(id)) {
    element.classList.add('highlight');
  }
  if (text) {
    element.append(document.createTextNode(text));
  }
  return element;
}

var container = document.getElementById('dynamic');
var renderedModel = render(exampleModel, highlightIds);
container.appendChild(renderedModel);
