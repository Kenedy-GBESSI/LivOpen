<template>
    <div class="validation">
        <div class="validate-image">
          <img src="../assets/images/Ellipse.png" alt="">
          <img src="../assets/images/Vector.png" alt="">
          </div>
          <p class="successfully-class">Livreur ajouté avec succès!</p>
          <p class="confirmation">Les accès pour se connecter à la plateforme ont été envoyés à <a href="#">ddiller@gmail.com</a></p>
          <button @click.prevent="$emit('close-modal2')">Terminer</button> 
    </div>
</template>

<script setup>
defineEmits(["close-modal2"])

</script>

<style  scoped>
.validation{
    width: 500px;
    height: 364px;
    background: var(--white-color);
    margin-top: 80px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.validate-image{
    position: relative;
    margin: 24px 0;
}
.validate-image img:last-child{
    display: inline-block;
    position: absolute;
    right: 20px;
    top: 25px;
}
.validation .successfully-class{
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: -0.02em;
    margin: 0 0 15px 0;
    color: rgba(37, 37, 65, 0.9);
}
.validation .confirmation{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #0F0F14;
    padding: 0 64px;
}
button{
    display: inline-block;
    margin: 15px 0;
    width: calc(100% - 150px );
    padding: 14px 25px;
    background: #000000;
    color: white;
    border-radius: 4px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
}

</style>