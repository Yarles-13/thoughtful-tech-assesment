function sort(width, height, length, mass) {
  if (
    typeof width !== "number" ||
    typeof height !== "number" ||
    typeof length !== "number" ||
    typeof mass !== "number"
  ) {
    return "NOT ACCEPTABLE"
  }
  const volume = width * height * length;

  if ((volume >= 1000000 || width >= 150 || length >= 150 || height >= 150) && mass >= 20) {
    return "REJECTED"
  } else if (volume >= 1000000 || width >= 150 || length >= 150 || height >= 150 || mass >= 20) {
    return "SPECIAL"
  } else {
    return "STANDARD"
  }

}


module.exports = sort;