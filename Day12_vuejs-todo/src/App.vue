<template>
  <div id="app">
    <Header v-on:createTodo="createTodo"/>
    <Todos v-bind:todos="todos" v-on:removeTodo="removeTodo"/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Todos from "./components/Todos";
let todos = [
  {
    id: "1",
    name: "Do Coding",
    done: false
  },
  {
    id: "2",
    name: "Do Coding Again",
    done: false
  },
  {
    id: "3",
    name: "Have Fun",
    done: false
  },
  {
    id: "4",
    name: "Have Fun Coding",
    done: false
  },
  {
    id: "5",
    name: "Game Night",
    done: false
  },
];

export default {
  name: "App",
  components: {
    Header,
    Todos,
  },
  data: function () {
    return {
      todos: todos,
    };
  },
  methods: {
    createTodo: function (todo) {
      let todoObject = {
        id: Math.floor(Math.random() * 10000000),
        name: todo,
        done: false
      }
      this.todos.push(todoObject)
    },

    removeTodo: function (id) {
      this.todos = this.todos.filter(todo => todo.id != id);

    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background: #f3f3f3;

  font-family: Arial, Helvetica, sans-serif;
}
</style>
