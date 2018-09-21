function Point(x, y) {
  this.x = x
  this.y = y
}

function Side(length) {
  this.length = length
}

Point.prototype.toString = function() {
  var a = this.x.toString();
  var b = this.y.toString();
  return (/a,\s?b/);
}


shape.prototype = Object.create(shape.prototype)
shape.prototype.constructor = Shape; 
shape.prototype.addToPlane = function(x, y) {
  this.position = new Point (x, y);
}
