Node = {
  create: function(value) {
    return {
      value: value,
      next: null
    };
  }
};
List = {
  getLastNode: function(node) {
    return node.next ? this.getLastNode(node.next) : node;
  },
  create: function() {
    return {
      _length: 0,
      head: null
    };
  },
  add: function(list, value) {
    var node = Node.create(value);
    if (this.isEmpty(list)) {
      list.head = node;
    } else {
      var last = this.getLastNode(list.head);
      last.next = node;
    }
    list._length++;
    return node;

  },
  search: function(list, value) {
    //ищет в списке l значение v и возвращает ссылку на элемент списка с этим значением если оно есть,
    // в противном случае возвращает null
    var node = list.head;
    while (node) {
      if (node.value === value) break;
      node = node.next;
    }

    return node;

  },
  remove: function(list, index) //удаляет из списка l элемент по индексу index (индексация с 0)
    {
      var element;
       if(index === 0) {
         element = this.get(list, index);
       }
       if(index >= 1 ) {
         element = this.get(list, index-1);
       }
       if(!element){
         return false;
       }
       var next = element.next;
       element = next;
       List._length--;
       return element;
    },
  isEmpty: function(list) {
    return !list.head;
  },
  insertAt: function(list, value, index) //вставляет в список l значение v по индексу i
    {
      var newNode = Node.create(value);
      var parentNode;
      if(index === 0) {
        parentNode = this.get(list, index);
      }
      if(index >= 1) {
        parentNode = this.get(list, index - 1);
      }
      if(!parentNode) {
        return false;
      }
      newNode.next = parentNode.next;
      parentNode.next = newNode;
      list._length++;
      return parentNode;
    },
  toArray: function(list) {
    var arr = [];
    var l = list.head;
    while (l) {
      arr.push(l.value);
      l = l.next;
    }
    return arr;
  },
  size: function(list) //возвращает количество элементов списка
    {
      return list._length;
    },
  get: function(list, index) //возвращает I-ый элемент списка или false если такой не найден
    {
      var node = list.head;
      if (this.size(list) <= index || this.isEmpty(list) || index < 0) {
        return false;
      }
      for (var i = 0; i !== index; i++) {

        node = node.next;

      }
      return node;
    }
};
var l = List.create();
List.add(l, 5);
List.add(l, 10);
List.add(l, 20);
// List.add(l, 30);

function print(list) {
  console.log(list.value);
  if (list.next) {
    print(list.next);
  }
}


// List.add(t, 1);
// List.add(t, 6);
// List.add(t, 4);
// List.add(t, 7);
// List.add(t, 14);
// List.add(t, 13);

// List.insertAt(l, 1, 0);
// List.insertAt(l, 8, 2);
print(l.head);
console.log('list remove', List.remove(l, 0));
