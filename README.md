[![Build Status](https://travis-ci.org/123mieto/point-is-polish.svg?branch=master)](https://travis-ci.org/123mieto/point-is-polish)

#point-is-polish
This is package used to check if point on map is located within Polish borders.

##Installation
Using npm:
```
$ npm i --save point-is-polish
```

Importing:
```
import isInPoland from 'point-is-polish';

```

Example:
```
//When user click on map
let _onMapClick = (e) => {
  if (isInPoland(e.lat, e.lng) {
    console.log('Point is within Polish borders');
  } else {
    console.log('Point is outside Polish borders');
  }
}
```


