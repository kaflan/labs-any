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
    add: function(list, value) 
    {
    	var node = Node.create(value);
        if (this.isEmpty(list)) {
        	list.head = node;            
        }
        else{
        	var last = this.getLastNode(list.head);
        	last.next = node;
        }
        list._length++;
        return node;

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
    remove: function(list, index) //удаляет из списка l элемент по индексу index (индексация с 0)
    {

    },
    isEmpty: function(list) 
    {
        return !list.head;
    },
    insertAt: function(list, value, index) //вставляет в список l значение v по индексу i
    {
        var i = 0;
        var l = list.head;
        var el = Node.create(value);
        while (i !== index) {
            if (!l.next) {
                console.log('Not aviable index, can try ', i++, ' index');
                break;
            }
            l = l.next;
            // l = el;
            console.log(i, 'index, el ', el);
          i++;  
        }
        if(index === 0){
         el.next = l;
         list.head = el;
        }
         
         list._length++;
        // у тебя не ДОБАВЛЯЕТСЯ элемент
        // а ЗАМЕНЯЕТСЯ
    },
    toArray: function(list)
    {

    	var arr = [];
    	var head = list;
   	 	if(list.head){
   	 		head = list.head.next; 
    	}
        for(var i in head){
        	if(typeof l[i] === 'number'){
        		arr.push(l[i]);
        	}
        	
        	if(typeof l[i] === 'object') {
        		this.toArray(l[i]);
        	}
        	if(!l[i]){
        		console.log(l[i], 'aad');
        		// return;
        	}

        }
        return arr;
    },
    size: function(list) //возвращает количество элементов списка
    {
        return list._length;
    },
    get: function(list, i) //возвращает I-ый элемент списка или false если такой не найден
    {
    	return false;
    	
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
// print(t);
// List.insertAt(l, 1, 0);
// List.insertAt(l, 8, 2);
print(l.head);
console.log('list arr', List.toArray(l));