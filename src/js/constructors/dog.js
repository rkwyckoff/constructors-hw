function Dog (options) {
    let opts = options || {};

    this.status = 'normal';
    this.color = 'black';
    this.owner = opts.owner;

     if (opts.hungry === undefined) {
         this.hungry = true;
     } else {
         this.hungry = opts.hungry;
     }
    // if(opts.owner === undefined) {
    //     this.owner === undefined
    // } else {
    //     this.owner = opts.hungry;
    // }
}

export { Dog };
