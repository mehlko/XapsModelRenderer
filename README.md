# ModelRenderer

This project renders a given model with.
There are 2 wys to render a model: static (html and css) or dynamic (javascript, html and css).
Static means there is not Javascript required to render

# structure

The model has the following structure:
A Process contains a name, inputs (product), outputs (product), resources, measurements and constraints.

# html + css

Below is an example for the use of the htm and css version.
In your html document, you add the following html structure (e.g. divs) with the shown classes: process, name, inputs, outputs, product, resources, resource, measurements, measurement, constraints, constraint.

```
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
    </div>
´´´


# javascript + html + css
Create a container (e.g. div) with "dynamic" as id.
Then call the *function render(model, highlightIds)*




# Try it
[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/web-platform-wqmzhh)
```
