/**
 * @param {string} s
 * @return {boolean}
 */
var node = function(val) {
    this.value = val;
    this.next = null;
   }
   const matching = {
    '(': ')',
    '[': ']',
    '{': '}'
   }
   var isValid = function(s) {
    const chars = s.split('');
    let waiting;
    for(c of chars) {
     if(matching[c]){
      let holding = waiting;
      waiting = new node(matching[c]);
      waiting.next = holding;
     }else{
      if(waiting && waiting.value==c){
       waiting = waiting.next;
      }else{
       return false;
      }
     }
    }
    if(waiting) return false;
    return true;
   };