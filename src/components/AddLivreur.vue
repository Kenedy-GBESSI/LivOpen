<template>
    <div id="addLivreur">
         <p class="header">
            <span>Ajouter un livreur</span>
            <span class="material-symbols-outlined" @click="$emit('close-modal')">close</span>
         </p>
         <hr class="divider">
         <div class="wrapper-inscription">
              <form>
                <div class="field-item">
                    <div class="input-field-item">
                          <label for="">Nom</label>
                          <input type="text" placeholder="GBESSI">
                          <div class="control-item">control-item</div>
                    </div>
                    <div class="input-field-item">
                          <label for="">Prénom</label>
                          <input type="text" placeholder="Kénédy">
                          <div class="control-item">control-item</div>
                    </div>
                </div>
                <div class="field-item">
                    <div class="input-field-item">
                          <label for="sexe">Sexe</label>
                          <select name="sexe" id="sexe">
                            <option value="M">Masculin</option>
                            <option value="F">Féminin</option>
                            <option value="A">Autre</option>
                          </select>
                          <div class="control-item">control-item</div>
                    </div>
                    <div class="input-field-item">
                          <label for="">Date de naissance</label>
                          <input type="date" name="" id="">
                          <div class="control-item">control-item</div>
                    </div>
                </div>
                <div class="field-item">
                    <div class="input-field-item">
                          <label for="telephone">Téléphone</label>
                          <input type="tel" name="telephone" id="telephone">
                          <div class="control-item">control-item</div>
                    </div>
                    <div class="input-field-item">
                          <label for="email">Email</label>
                          <input type="email" placeholder="gbessikenedy@gmail">
                          <div class="control-item">control-item</div>
                    </div>
                </div>
                <div class="field-item">
                    <div class="input-field-item">
                          <label for="engin">Engin</label>
                         <select name="engin" id="engin">
                            <option value="tricyle">Tricycle</option>
                            <option value="motocycle">Motocycle</option>
                         </select>
                          <div class="control-item">control-item</div>
                    </div>
                    <div class="input-field-item">
                          <label for="adresse">Adresse</label>
                          <input type="text" placeholder="Abomey-Calavi">
                          <div class="control-item">control-item</div>
                    </div>
                </div>
                <div class="btn-wrapper">
                    <button @click.prevent="$emit('close-modal');$emit('active-modal2')">Ajouter</button>
                </div>
              </form>
         </div>
    </div>

</template>

<script setup>

import { ref } from 'vue';


defineEmits(["close-modal","active-modal2"])
</script>

<style scoped>
#addLivreur{
    width: 100%;
    top: 90px;
    min-height: calc(100% - 90px);
    background: #FFFFFF;
    border-radius: 16px 16px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#addLivreur .header{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 24px 0 24px 0;
    padding: 0 120px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.02em;
}
#addLivreur .header span:last-child{
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 2px;
    cursor: pointer;
    letter-spacing: -0.02em;
}
.divider{
    width: calc(100% - 230px);
    background-color: #DADEE3;
}
.wrapper-inscription{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.wrapper-inscription form{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:2%;
}
form .field-item{
    display: flex;
    align-items: flex-start;
}
.field-item .input-field-item{
    display: flex;
    margin: 2% 31px;
    flex-direction: column;
}
.input-field-item input,.input-field-item select{
  width: 425px;
  height: 48px;
  outline: none;
  border: 1px solid #D3D8E6;
  border-radius: 4px;
  background: white;
  margin: 6px 0;
  padding: 0 12px 0 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
}
.input-field-item label{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #6B7A99;
}
form button{
    display: inline-block;
    margin: 24px 0;
    width: 237px;
    height: 48px;
   background: #000000;
   border-radius: 8px;
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  cursor: pointer;
}
.input-field-item .control-item{
    display: none;
}
.btn-wrapper{
    width: 100%;
    padding: 0 0 0 0.2rem;
}
@media screen and (max-width: 992px) {
    form .field-item{
    display: flex;
    flex-direction: column;
    }

}
</style>