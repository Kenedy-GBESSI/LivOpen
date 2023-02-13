<template>
    <div class="livreur">
        <p class="header">
            <span>Livreurs</span>
            <button @click.prevent="setModalValue()"><span class="material-symbols-outlined">add</span><span class="btn-text">Nouveau livreur</span></button>
        </p>
        <!-- <div class="vide-livreur">
             <img src="../assets/images/Vector1.png" alt="">
             <img src="../assets/images/Vector2.png" alt="">
             <p>
                Vos livreurs ajoutés seront visibles ici.<br>
                Cliquez sur le bouton ‘’Nouveau livreur’’ <br>
                pour ajouter des livreurs
             </p>
        </div> -->
        <DataTable />

    </div>
     <teleport to='#Modal'>
          <Modal :modalActive="modalActive">
             <AddLivreur @active-modal2="setModal2Value()" @close-modal="setModalValue()"/>
          </Modal>
     </teleport>
     <teleport to='#Modal2'>
          <Modal :modalActive="modal2Active">
             <AddValid @close-modal2="setModal2Value()" />
          </Modal>
     </teleport>
</template>

<script setup>
 import {ref} from 'vue';
 import Modal from "../components/Modal.vue"
 import AddLivreur from "../components/AddLivreur.vue"
 import AddValid from '../components/AddValid.vue';
 import DataTable from "../components/DataTable.vue"

 let modalActive = ref(null);
 let modal2Active = ref(null);
 const setModalValue = () =>{
    modalActive.value = !modalActive.value
 }
 const setModal2Value = () =>{
    modal2Active.value = !modal2Active.value
 }

</script>

<style  scoped>
.livreur{
    position: relative;
    width: 94%;
}
.livreur .header{
    display: flex;
    align-items: center;
    margin: 33px 0 0 24px;
}
.header > span{
   display:inline-block ;
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 20px;
   margin: 0 2% 0 0;
}
.header > button{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 12px;
    gap: 8px;
    width: 170px;
    height: 32px;
    border: none;
    background: #000000;
    border-radius: 4px;
    cursor: pointer;
    color: var(--white-color);
    font-size: 14px;
    font-weight: 600;
}
.vide-livreur{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    top: 30%;
    transform: translateY(-30%);
}
.vide-livreur img:first-child{
    width: 190px;
    height: 172px;
}
.vide-livreur p{
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.02em;
    margin: 40px 0;
}


</style>