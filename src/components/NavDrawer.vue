<template>


    <v-layout class="layout">
        <v-navigation-drawer
        v-model="this.drawer"
            temporary
            @click="action">
                <img src="../assets/embroidary-logo.png" alt="" class="logo">
    
              <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-view-dashboard" title="All offers" value="All offers"></v-list-item>
                <v-list-item prepend-icon="mdi-forum" title="Accessoirs" value="Accessoirs"></v-list-item>
                <v-list-item prepend-icon="mdi-forum" title="LoopFrames" value="LoopFrames"></v-list-item>
                <v-list-item prepend-icon="mdi-forum" title="Miscellaneous" value="Miscellaneous"></v-list-item>
    
                <v-list-item prepend-icon="mdi-forum" title="Paint By Namber" value="Paint By Namber"></v-list-item>
                  
                <v-list-item prepend-icon="mdi-forum" title="Nature Morte" value="Nature Morte"></v-list-item>
                
                <v-list-item prepend-icon="mdi-forum" title="Landscape" value="Land Scape"></v-list-item>
                
                <v-list-item prepend-icon="mdi-forum" title="Portrait" value="Portrait"></v-list-item>
                
              </v-list>
            </v-navigation-drawer>
    </v-layout>
    
     </template>
     <script>
     export default{
        props:['drawer']
     }
    </script>
    <style scoped>
    .v-navigation-drawer{
        height: 800px;
        margin-bottom: 100px;
    }
    .dropdown{
      z-index: 9999;
      height: 300px;
    }
    .logo{
      width: 100px;
      height: 70px;
    }
    </style>