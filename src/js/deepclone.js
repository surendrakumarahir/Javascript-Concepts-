function deepClone(object) {
  var newObject = {}
  for (var key in object) {
    if (typeof object[key] === "object" && object[key] !== null) {
      newObject[key] = deepClone(object[key])
    } else {
      newObject[key] = object[key]
    }
  }
  return newObject
}
