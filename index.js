module.exports = function pairwisePotential(potential) {
  return function(positions) {
    const count = positions.length / 3;
    let energy = 0.0;
    const force = new Float32Array(count * 3);
    for (let i = 0; i < count - 1; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3 + 0] - positions[j * 3 + 0];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        const p = potential(d);
        energy += p.energy;
        const nx = dx / d;
        const ny = dy / d;
        const nz = dz / d;
        force[i * 3 + 0] += nx * p.force;
        force[i * 3 + 1] += ny * p.force;
        force[i * 3 + 2] += nz * p.force;
        force[j * 3 + 0] -= nx * p.force;
        force[j * 3 + 1] -= ny * p.force;
        force[j * 3 + 2] -= nz * p.force;
      }
    }
    return {
      energy: energy,
      force: force
    };
  };
};
