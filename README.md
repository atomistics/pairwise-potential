# pairwise-potential

Takes a pairwise function and returns a function that can calculate the energy from a set of 3D positions.

## Example

```js
const LJ = require("@atomistics/lennard-jones-pairwise-js");
const PairwisePotential = require("@atomistics/pairwise-potential");

const ljp = PairwisePotential(LJ());

console.log(ljp([0,0,0, 1.01,0,0]));

> { energy: -0.9966412452432595,
>   force: Float32Array [ 0.6486654877662659, 0, 0, -0.6486654877662659, 0, 0 ] }
```

## API

```js
const PairwisePotential = require('@atomistics/pairwise-potential');

const potential = PairwisePotential(pairwise)
```

| Parameter | Type               | Description                                                        |
|-----------|--------------------|--------------------------------------------------------------------|
| pairwise  | pairwise potential | A pairwise potential like `@atomistics/lennard-jones-pairwise-js` |

Returns a function that calculates the potential energy of and force on from a set of positions:

```js
const result = potential(positions);
```

| Parameter | Type  | Description                                                                           |
|-----------|-------|---------------------------------------------------------------------------------------|
| positions | array | A set of 3D positions in a flat array of floats, e.g., [0.0, 0.0, 0.0, 1.0, 0.0, 1.0] |

Returns an object containing the energy and force:

| Name          | Type  | Description                  |
|---------------|-------|------------------------------|
| result.energy | float | The energy of the potential. |
| result.force  | float | The force of the potential.  |
