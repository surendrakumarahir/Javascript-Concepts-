function array() {
        let arr = Object.create(array.prototype)
        arr.length = 0;
    //  console.log(arguments);
        for(key in arguments) {
            arr[key] = arguments[key]
            arr.length +=1
        }

        return arr;

}

array.prototype.push = function(value) {
    this[this.length] = value;
    this.length++;
    return length;
}
array.prototype.pop = function(value) {
    this.length--
    const elementToRemove = this[this.length]
    delete this[this.length]
    return elementToRemove
}
const arr = array(1, 3, 4, 5);
console.log(arr[0]);
console.log(arr[3]);
console.log(arr.length);
arr.push(23);
console.log(arr);
console.log(arr.pop());
console.log(arr);