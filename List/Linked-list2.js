// 双链表
//节点
function Node(element) {
    this.element = element; // 当前节点的元素
    this.next = null; // 下一个节点链接
    this.previous = null; // 上一个节点链接
}

//链表类
function LinkedList() {
    this.head = new Node('head'); // 头节点
    this.find = find; // 查找节点
    this.insert = insert; // 插入节点
    this.remove = remove; // 删除节点
    this.findPrev = findPrev; // 查找前一个节点
    this.display = display; // 显示链表
}

// 查找节点，遍历链表

function find(item) {
    var currNode = this.head;
    while (currNode.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
}

// 插入节点，想要插入一个节点，必须明确要在哪个节点的前面或后面插入。
// 找到目标节点后，将新节点的 next 属性设置为后面节点的 next 属性对应的值，然后设置后面节点的 next 属性指向新的节点
// 双链表还需要设置新节点的 previous 属性，使其指向该节点的前驱

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    newNode.previous = currNode;
    currNode.next = newNode;
    if (newNode.next !== null) {
        newNode.next.previous = newNode
    }
}

// 删除节点
// 双向链表的删除 remove 方法比单链表效率高，不需要查找前驱节点。
// 只要找出待删除节点，然后将该节点的前驱 next 属性指向待删除节点的后继，设置该节点后继 previous 属性，指向待删除节点的前驱即可。

function remove(item) {
    var currNode = this.find(item);
    if (currNode.next !== null) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    } else {
        currNode.previous.next = null
        currNode.previous = null
    }
}

//查找链表中的最后一个元素

function findLast() {
    var currNode = this.head;
    while (!(currNode.next === null)) {
        currNode = currNode.next;
    }
    return currNode;
}

// 显示链表元素

function display() {
    var currNode = this.head;
    while (currNode.next !== null) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

//反向显示链表元素

function dispReverse() {
    var currNode = this.findLast();
    while (currNode.previous !== null) {
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}