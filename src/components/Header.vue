<template>
    <div class="header">
        <div class="container">
              <div class="wrapper-logo">
              </div>
              <div class="admin-area content">
                <span class="material-symbols-outlined">notifications</span>
                 <div class="admin-image-area">
                   <img src="../assets/images/image2.png" alt="image of administrator">
                   <div class="admin-infos">
                      <span class="admin-fullname">GBESSI Kenedy</span>
                      <span class="admin-role">Admin</span>
                   </div>
                 </div>
              </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.header{
    width: 100%;
    height: 70px;
    background: #e4e4e4;
}
.header .container{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 30px 0 16px;
}
.container .wrapper-logo{
    width: 48px;
    height: 48px;
    border: 1px solid #DCDCDC;
    background-image: url("../assets/images/image 5.png");
    background-size: cover;
    background-position: center;
    border-radius: 100%;
}
.container .admin-area{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 15%;
}
.admin-area .admin-image-area{
    display: flex;
}
.admin-image-area .admin-infos{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10px;

}
.admin-infos .admin-fullname{
    text-transform: uppercase;
    margin: 2px 0;
    font-size: 14px;
    line-height: 17px;
    font-weight: 800;
}
.admin-area .admin-image-area img{
    width: 40px ;
    height: 40px;
    border-radius: 100%;
}
.admin-role{
    font-size: 14px;
    color: #6B7A99;
    font-style: normal;
    font-weight: 500;
    line-height: 15px;

}
@media screen and (max-width: 768px) {
.admin-infos{
    display: none!important;
   }
   .admin-area > span{
     display: none!important;
   }

}


</style>