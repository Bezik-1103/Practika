import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

var app = new Vue({
     el: "#app",
     data: {
         students: [],
         photo:'',
         mark:'',
         isDonePr:'',
         _id:'',
         name:'',
         group:'',
         __v:'',
         search:'',
         student:''
     },	 
     mounted: function(){
         axios.get("http://46.101.212.195:3000/students").then((response)=>{
             console.log(response.data);
             this.students = response.data;
         })
     },
     methods: {
       clickme: function(id) {
           alert ("Ok");
           this.students - this.students.filter((element) =>{
               return element.id !==id;
           });;
       }
        
     },
  
 });

