# Production Line Renderer

This project renders a given production line structre.
There are 2 ways to use this project: pure **HTML and CSS** or **Javascript, HTML and CSS**.
Static means there is not Javascript required to render

# Example

[https://stackblitz.com/edit/web-platform-wqmzhh](https://stackblitz.com/edit/web-platform-wqmzhh)

# Production Line Structure

The prodcution line has the following structure:
A **process** contains a **name**, **inputs**, **outputs**, **product** **resources**, **resources**, **measurements**, **measurements**, **constraints** and **constraint**.

# HTML + CSS

**This is the preferred integration method: Easier to use and integrate**

1. Integrate [style.css](../master/style.css) to your HTML document.
   `<link rel="stylesheet" type="text/css" href="style.css" />`
2. Add the following html structure (e.g. divs) with the shown classes: **process**, **name**, **inputs**, **outputs**, **product** **resources**, **resources**, **measurements**, **measurements**, **constraints** and **constraint**.
   Below is an example for the use of the htm and css version.

```
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
  <div class="process highlight">
    <div class="name">Sensor Assembly</div>
    <div class="inputs">
      <div class="product">Sensor</div>
      <div class="product">Screw</div>
      <div class="product">Case</div>
    </div>
    <div class="resources">
      <div class="resource">Placer</div>
      <div class="resource">Screwer</div>
    </div>
    <div class="measurements">
      <div class="measurement highlight">Screwer Force</div>
      <div class="measurement">Position X</div>
      <div class="measurement">Position Y</div>
    </div>
    <div class="constraints">
      <div class="constraint">Max Screwer Force</div>
    </div>
    <div class="outputs">
      <div class="product">Assembled Sensor</div>
    </div>
  </div>
```

# Javascript + HTML + CSS

Create a JSON variable for the model you want to render:

```
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
```

Create an array with ids corresponding to the ids on the model above.

```
var highlightIds = ['Sensor Assembly', 'Screwer Force'];
```

Create a container (e.g. div) with "container" as id.
Then call the function **render(model, highlightIds)** and add the result to the container element.

Example given below

```
var container = document.getElementById('container');
var renderedModel = render(exampleModel, highlightIds);
container.appendChild(renderedModel);
```
