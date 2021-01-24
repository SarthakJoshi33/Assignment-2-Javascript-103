function removeDuplicates(items) {
  var x,
      len=items.length,
      out=[],
      object={};

  for (x=0; x<len; x++) {
    object[items[x]]=0;
  }
  for (x in object) {
    out.push(x);
  }
  return out;
}
var MyItems = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
var result = removeDuplicates(MyItems);
console.log(MyItems);
console.log(result);
