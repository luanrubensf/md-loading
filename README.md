# md-loading

This component creates a loading in the element that it is placed.

## How to import

```
npm i md-loading --save
```

In the project:

```
import mdLoading from 'md-loading';

angular.module(MODULE_NAME, [
    mdLoading
]);
```

## How to use


Just put the directive in the html:

```html
<div md-loading="vm.tracker">
</div>
```

```vm.tracker``` is a tracking object, that contains a tracking function.
When the component is running, it verifies if the function ```vm.tracker.tracking()``` is true or false. If it is true, then add the loading. If doesn't, removes the loading.

I recommend you to use [this tracker](https://github.com/ajoslin/angular-promise-tracker).