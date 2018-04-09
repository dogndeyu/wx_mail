import Vue from 'vue'

const focus = Vue.directive('focus',{
    inserted:function(el){
        el.focus();
        // el.setAttribute('placeholder',"test")
    }
})