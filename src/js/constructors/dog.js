function Dog (options) {
  this.status = 'normal'
  this.color = "black"
  var options = options || {};
  moonshine.options =  true;
  this.hungry = options.hungry;

}

export { Dog };
