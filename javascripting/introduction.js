var shape = function (name) {
    this.name = name
};
shape.prototype.draw = function () {
    return "i am generic shape";
}
//circle
var circle = function () {}
circle.prototype = Object.create(shape.prototype);
circle.prototype.draw = function () {
    return "i am a circle";
}
//triangle
var triangle = function () {}
triangle.prototype = Object.create(shape.prototype);
triangle.prototype.draw = function (name) {
    return "this is triangle and my size is " + name;
}
//printing shapes
var shapes = [new shape(), new circle(), new triangle(23)];
shapes.forEach(function (shapeList) {
    console.log(shapeList.draw());
});