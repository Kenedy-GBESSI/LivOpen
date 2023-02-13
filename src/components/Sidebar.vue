<template>
    <div :class="[isExpanded ? 'not-expanded': '']" class="sidebar">
        <ul class="wrapper-sidebar">
            <li class="sidebar-elt" @click="changeExpanded">
                <router-link to="#">
                    <span class="material-symbols-outlined">navigate_before</span>  
                    <span class="sidebar-text">Réduire</span>   
                </router-link>
            </li>
            <li class="sidebar-elt" :class="[selected == 1 ? 'active': '']" @click="changeSelected(1)">
                <router-link to="#">
                    <span class="material-symbols-outlined">pie_chart</span>  
                    <span >Tableau de bord</span> 
                </router-link>
            </li>
            <li class="sidebar-elt" :class="[selected == 2 ? 'active': '']" @click="changeSelected(2)">
                <router-link to="#">
                    <span class="material-symbols-outlined">shopping_cart</span> 
                     <span>Commandes reçues</span> 
                </router-link>
            </li>
            <li class="sidebar-elt" :class="[selected == 3 ? 'active': '']" @click="changeSelected(3)">
                <router-link to="#">
                    <span class="material-symbols-outlined">group</span>
                    <span>Partenaires</span> 
                </router-link>
            </li>
            <li class="sidebar-elt current" :class="[selected == 0 ? 'active': '']" @click="changeSelected(0)">
                <router-link to="/">
                    <span class="material-symbols-outlined">directions_bike</span>
                     <span>Livreurs</span> 
                </router-link>
            </li>
            <li class="sidebar-elt" :class="[selected == 4 ? 'active': '']" @click="changeSelected(4)">
                <router-link to="#">
                    <span class="material-symbols-outlined">water_bottle</span>
                    <span>Products</span> 
                </router-link>
            </li>
            <li class="sidebar-elt" :class="[selected == 5 ? 'active': '']" @click="changeSelected(5)">
                <router-link to="#">
                    <span class="material-symbols-outlined">home</span>
                    <span>Stock</span> 
                </router-link>
            </li>
            <li class="user-area-wrapper"> 
                <ul class="user-area">
                    <li class="sidebar-elt-item" :class="[selected == 6 ? 'active': '']" @click="changeSelected(6)">
                <router-link to="#">
                    <span class="material-symbols-outlined">person</span>
                    <span>Utilisateurs</span> 
                </router-link>
              </li>
             <li class="sidebar-elt-item" :class="[selected == 7 ? 'active': '']" @click="changeSelected(7)">
                <router-link to="#">
                    <span class="material-symbols-outlined">settings</span>
                    <span>Paramètres</span> 
                </router-link>
               </li>

                </ul>
            </li>
           
        </ul>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
let isExpanded = ref(false);
let selected = ref(0);
const changeExpanded = () =>{
    isExpanded.value = !isExpanded.value;
}
const changeSelected = (i) =>{
     selected.value = i
}
</script>

<style scoped>
.sidebar{
    position: relative;
    width: 15%;
    color: var(--white-color);
    background:#000000;
    box-shadow: 0px 4px 24px rgba(106, 122, 152, 0.15);
}
.sidebar .wrapper-sidebar{
   list-style: none;
   display: flex;
   flex-direction: column;
   height:calc(95vh - 62px);
   width: 100%;
   justify-content: space-around;
   align-items: flex-start;
}
.sidebar .wrapper-sidebar .user-area-wrapper ul{
    list-style: none;
}
.wrapper-sidebar .sidebar-elt,.wrapper-sidebar .user-area-wrapper{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 0.5rem;
}
.user-area{
    width: 100%;
}
.user-area li{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 0;
    width: 100%;
}
.sidebar ul li a{
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white-color);
}
.sidebar ul li a span{
    display: inline-block;
    margin: 0 0.70rem;
}
.not-expanded > ul li a span:last-child{
   display: none;
}
.not-expanded{
    width: auto!important;
}
li.active{
    border-left: 2px solid #F9C541;
}
li.active a{
    color: #F9C541!important;
}

@media screen and (max-width: 992px) {
    .sidebar > ul li a span:last-child{
       display: none;
    }
    .sidebar{
        width: auto;
    }
}

</style>