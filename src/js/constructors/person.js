function Person (options) {

    this.pet = function (dog) {
        dog.status = 'happy';
    };
    this.feed = function (dog) {
        dog.hungry = false;
    };
    let opts = options || {};
     if(opts.cool === undefined) {
       this.cool = false;
     } else {this.cool = true
        }


 }



export { Person };
