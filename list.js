Node = {
    create: function(value) {
        return {
            value: value,
            next: null
        };
    }
};
List = {
    getLastNode: function(list) {
        if (!list.next) {
            return list;
        }
        return this.getLastNode(list.next);
    },
    create: function() {
        return {
            _length: 0,
            head: null
        };
    },
    add: function(list, value) {
        if (!list.head) {
            list._length++;
            list.head = Node.create(value);
            return;
        }
        list._length++;
        var last = this.getLastNode(list.head);
        last.next = Node.create(value);
    },
    search: function(list, value)
    {
        //ищет в списке l значение v и возвращает ссылку на элемент списка с этим значением если оно есть, в противном случае возвращает null
        for (var i in list) {
            if (list[i] === value) {
                return search(list[i], value);
            }
        }
        if (list.value === value) {
            return list;
        }
        return null;
    },

    toArray: function(list)
    {
        if (list.head.value) {}
        return [].push(list.value);
    },
    remove: function(list, index) //удаляет из списка l элемент по индексу index (индексация с 0)
    {

    },
    isEmpty: function(list) 
    {
        if (list.head) {
            return false;
        }
        return true;
    },
    insertAt: function(list, value, index) //вставляет в список l значение v по индексу i
    {
        var i = 0;
        var l = list.head;
        var el = Node.create(value);
        var val = l.value;
        while (i !== index) {
            if (!l.next) {
                console.log('Not aviable index, can try ', i++, ' index');
                break;
            }
            l = l.next;
            el.next = l;
            // l = el.next;
             console.log(i, 'index', l);
            // list._length++;
            i++;
             console.log(i, 'index',el);

        }
         el.next = l;
         list._length++;
        // у тебя не ДОБАВЛЯЕТСЯ элемент
        // а ЗАМЕНЯЕТСЯ
        // l.value = value;
    },
    size: function(list) //возвращает количество элементов списка
    {
        return list._length;
    },
    get: function(list, i) //возвращает I-ый элемент списка или false если такой не найден
    {

    }

};
var l = List.create();
List.add(l, 5);
List.add(l, 10);
List.add(l, 20);
List.add(l, 30);

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
// print(t);
List.insertAt(l, 15, 1);
print(l.head);
console.log('list', l);