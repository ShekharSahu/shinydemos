var BorderBox = function(w, h){
  this.dirs = ['Top', 'Right', 'Bottom', 'Left'];
  this.corners = ['BottomLeft', 'BottomRight', 'TopLeft', 'TopRight'];
  this.box = document.createElement('div');
  this.width = w;
  this.height = h;
};

BorderBox.prototype = {
  style: function(){
    var styles = ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'];
    return styles[Math.floor(Math.random() * 9)];
  },
  
  color: function(){
    return '#' + Math.random().toString(16).slice(-6);
  },
  
  number: function(){
    var upperLimit = 250;
    return Math.floor(Math.random() * upperLimit) + "px";
  },
  
  doubleNumber: function(){
    var upperLimit = 250,
        first = Math.floor(Math.random() * upperLimit) + "px",
        second = Math.floor(Math.random() * upperLimit) + "px";
    return first + " " + second;
  },
  
  oneOrTwo: function(){
    return [this.number, this.doubleNumber][+(Math.random() > 0.5)]();
  },
  
  border: function(prop, style){
    this.box.style['border' + prop] = style;
  },
  
  create: function(){
    this.box.style.width = this.width + "px";
    this.box.style.height = this.height + "px";
    this.box.style.backgroundColor = this.color();
    this.dirs.forEach(function(item){
      this.border(item + 'Width', this.number());
      this.border(item + 'Style', this.style());
      this.border(item + 'Color', this.color());
    }, this);
    this.corners.forEach(function(item){
      this.border(item + 'Radius', this.oneOrTwo());
    }, this);
    this.append();
  },
  
  append: function(){
    document.body.appendChild(this.box);
  },
  
  destroy: function(){
    document.body.removeChild(this.box);
    this.box = null;
  }
};