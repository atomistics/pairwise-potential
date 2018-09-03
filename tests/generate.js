const fs = require("fs");
const LJ = require("@atomistics/lennard-jones-pairwise-js");
const PairwisePotential = require("../index");

const inputs = JSON.parse(
  fs.readFileSync(__dirname + "/test-input.json", "utf-8")
);

const ljp = PairwisePotential(LJ());

const testResults = [];
for (let p of inputs) {
  const fe = ljp(p);
  testResults.push({
    energy: fe.energy,
    force: Array.from(fe.force)
  });
}

console.log(JSON.stringify(testResults));
