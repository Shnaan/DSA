// node class
class Node{

constructor(value){

    this.value = value;
    this.next = null;
}
}

//linked list class
class LinkedList{
// intialize the linked list
constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  
}
  // append method add node to the linked list 
    append(value){
    const newNode = new Node(value);
        if (!this.head){
           this.head = newNode;
            this.tail = newNode;
                  
        }else{
          
              this.tail.next = newNode;
              this.tail = newNode;
        }
              this.length++;
}

    prepend(value){
        let newNode = new Node;
    if(!this.head){

        this.head = newNode;
        this.tail = newNode;
    }else{
     newNode.next = this.head;
        this.head = newNode;
        
    }

   this.length++;
        
}
    
    print(){
     let current = this.head;
     let result = [];
     while(current){
     result.push(current.value);
         current = current.next;
    }
     console.log(result.join(" -> ")+"-> null");

    
}
}


const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.print();



