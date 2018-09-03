const fs = require("fs");
const test = require("tape");
const LJ = require("@atomistics/lennard-jones-pairwise-js");
const PairwisePotential = require("../index");

const inputs = JSON.parse(
  fs.readFileSync(__dirname + "/test-input.json", "utf-8")
);
const outputs = JSON.parse(
  fs.readFileSync(__dirname + "/test-output.json", "utf-8")
);

const ljp = PairwisePotential(LJ());

test("various systems", t => {
  for (let i = 0; i < inputs.length; i++) {
    const positions = inputs[i];
    const fe = ljp(positions);
    t.equals(fe.energy, outputs[i].energy);
    t.same(Array.from(fe.force), outputs[i].force);
  }
  t.end();
});
