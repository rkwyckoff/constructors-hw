function Person () {
    this.pet = function (dog) {
        dog.status = 'happy';
    };
    this.feed = function (dog) {
    dog.hungry = false
    };
}

export { Person };
