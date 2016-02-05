function create(num) {
  return {
    value: num,
    left: null,
    right: null
  };
}

function add(tree, value) {
  if (tree.value > value) {
    if (!tree.left) {
      tree.left = create(value);
    }
    add(tree.left, value);
  }
  if (tree.value < value) {
    if (!tree.right) {
      tree.right = create(value);
    }
    add(tree.right, value);
  }
  return tree;
}

function search(tree, value) {
  for (var key in tree) {
    if (typeof tree[key] === 'number') {
      if (tree[key] === value) {
        return true;
      }
    }
    if (typeof tree[key] === 'object') {
      if (tree[key]) {
        return searh(tree[key], value);
      }
    }
  }
  return false;
}

function remove(tree, value) {
  if (tree.value === value) {
    if(tree.value > value){

    }
    if(tree.value < value){
      
    }
  }
  return tree;
}

function print(tree) {
  if (typeof tree === 'number') {
    return tree;
  }
  if (!tree) {
    return '';
  }
  return print(tree.left) + ' ' + print(tree.value) + ' ' + print(tree.right);
}
var t = create(8);
add(t, 10);
add(t, 3);
add(t, 1);
add(t, 6);
add(t, 4);
add(t, 7);
add(t, 14);
add(t, 13);
console.log(print(t));
