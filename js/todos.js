/* todos.js */
export default class Todos {
    // Do NOT modify the constructor
    constructor() {
      this.todos = [
        {
          title: "Learn JavaScript",
          category: "work",
        },
        {
          title: "Meditate",
          category: "personal",
        },
      ];
    }
  
    getAll() {
      console.log(this.todos)
        return this.todos;
      
      }
  
      getCount() {
        return this.todos.length    
      }
      
      add(title, category) {
        this.todos.push({title, category});          
        return this.todos   
      }
      
      getWork() {
         return this.todos[1];  
      }
      
      getWorkCount() {
          // your code    
      }
      
      getPersonal() {
          // your code    
      }
      
      getPersonalCount() {
          // your code    
      }
    }
