export default function pseudoPrototype() {
  HTMLElement.prototype.pseudoStyle = function(element,prop,value) {
    var _this = this;
    var _sheetId = 'pseudoStyles';
    var _head = document.head || document.getElementsByTagName('head')[0];
    var _sheet = document.getElementById(_sheetId) || document.createElement('style');
    _sheet.id = _sheetId;
    var className = 'pseudoStyle';
  
    _this.className += ' '+className; 
  
    _sheet.innerHTML += '\n.'+className+':'+element+'{'+prop+':'+value+'}';
    _head.appendChild(_sheet);
    return this;
  };
}

