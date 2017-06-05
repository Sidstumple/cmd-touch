# Coding conventions

### Variable names
Use camelCasing for variable names:
```javascript
var camelCase = 1;
// not var camelcase = 1;
```

### Operators
Always use spaces around operators and after commas:
```javascript
var camelCase = [1, 2, 3, 4];
// not var camelCase=[1,2,3,4];
```

### Indentation
Use a single tab for code indentation.

### Statement Rules
General rules for simple statements:
+ Always end a simple statement with a semicolon.

General rules for complex (compound) statements:
+ Put the opening bracket at the end of the first line.
+ Use one space before the opening bracket.
+ Put the closing bracket on a new line, without leading spaces.
+ Do not end a complex statement with a semicolon.

Functions:
```javascript
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
```
Loops:
```javascript
for (i = 0; i < 5; i++) {
    x += i;
}
```
Conditionals:
```javascript
if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
```

### Object Rules
+ General rules for object definitions:
+ Place the opening bracket on the same line as the object name.
+ Use colon plus one space between each property and its value.
+ Use quotes around string values, not around numeric values.
+ Do not add a comma after the last property-value pair.
+ Place the closing bracket on a new line, without leading spaces.

Example
```javascript
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
```
