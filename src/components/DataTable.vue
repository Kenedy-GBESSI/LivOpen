<template>
    <div class="datatable">
       <div class="wrapper">
         <div class="datatable-header">
            <div class="header-left">
                <div class="field-search">
                    <span class="material-symbols-outlined">search</span>
                    <input type="search" name="search" id="search" placeholder="Rechercher un livreur">
                </div>
                <select name="filter" id="filter">
                    <option value="" hidden>Filtré par</option>
                    <option v-for="(item, index) in ColumnsData" :key="index" :value="item">{{ item }}</option>
                </select>
                <button>
                    <span class="material-symbols-outlined">cloud_download</span>
                    Télécharger
                </button>
            </div>
            <div class="field-paginate">
              <label for="">1-14 sur 45</label>
              <span class="material-symbols-outlined">navigate_before</span>
              <span class="material-symbols-outlined">navigate_next</span>
            </div>
         </div>
         <div class="datatable-body">
           <table>
              <tbody>
                <tr>
                    <th v-for="(item, index) in ColumnsData" :key="index">{{ item }}</th>
                </tr>
                <tr v-for="(items, i) in AllData" :key="i">
                    <td v-for="(item, index) in items" :key="index" :class="[index == 4 && item == 'Actif' ? 'actif': index == 4 && item == 'Inactif'? 'inactif': '']">
                        <span>{{ item }}</span>
                    </td>
                    <td class="action"><span class="material-symbols-outlined">more_vert</span></td>
                </tr>
              </tbody>
           </table>
         </div>
       </div>
    </div>
</template>

<script setup>
const ColumnsData = ['Identifiant', "Nom & Prénoms", "Téléphone", "Engin","Statut","Action"];
const AllData = {
      0: ['#5210', "GBESSI Kénédy", "52 42 24 14", "Engin","Actif"],
      1: ['#5211', "Jeremie Boss", "53 43 23 15", "Engin","Inactif"],
      2: ['#5212', "Vincent Kpognihoun", "53 43 25 15", "Vehicule","Actif"],
      3: ['#5213', "Bern Jerome", "58 44 65 15", "Engin","Inactif"],
      4: ['#5210', "GBESSI Kénédy", "52 42 24 14", "Engin","Actif"],
      5: ['#5210', "GBESSI Kénédy", "52 42 24 14", "Engin","Actif"],
      6: ['#5211', "Jeremie Boss", "53 43 23 15", "Engin","Inactif"],
      7: ['#5212', "Vincent Kpognihoun", "53 43 25 15", "Vehicule","Actif"],
      8: ['#5213', "Bern Jerome", "58 44 65 15", "Engin","Inactif"],
      9: ['#5211', "Jeremie Boss", "53 43 23 15", "Engin","Inactif"],
      10: ['#5212', "Vincent Kpognihoun", "53 43 25 15", "Vehicule","Actif"],
      11: ['#5213', "Bern Jerome", "58 44 65 15", "Engin","Inactif"]
};


</script>

<style scoped>
.datatable{
    position: relative;
    width: calc(100% - 48px);
    margin: 33px 24px 0 24px;
}
.datatable .wrapper{
    position: relative;
}
.wrapper .datatable-header{
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #FFFFFF;
    border: 1px solid #DADEE3;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 16px 16px;
}
.datatable-header .header-left{
    display: flex;
    flex-wrap: wrap;
}
.header-left .field-search{
    position: relative;
}
.header-left select{
    padding: 8px 16px;
    width: 123px;
    height: 36px;
    border: 1px solid #D3D8E6;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    margin: 0 16px 0 0;
    outline: none;
    cursor: pointer;
}
.field-search input{
    padding: 8px 32px;
    width: 280px;
    height: 36px;
    background: #F4F6F9;
    border: 1px solid #DADEE3;
    border-radius: 8px;
    outline: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin: 0 16px 0 0;
}
.field-search span{
    position: absolute;
    top: 6.5px;
    left: 6px;
    z-index: 2;
    color:#DADADA;
}
.header-left button{
    padding: 9px 12px;
    width: 143px;
    height: 36px;
    background: #000000;
    border-radius: 6px;
    border: none;
    color: white;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    cursor: pointer;
}
.field-paginate{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.05em;
    color: #394452;
}
.field-paginate span{
    cursor: pointer;
}
.field-paginate label{
    margin: 0 2px;
}
.datatable-body{
    width: 100%;
}
.datatable table{
    width: 100%;
    padding: 16px 0;
}
.datatable  tr{
    height: 50px;
}

table tbody th{
    text-align: left;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #6B7A99;
    border-bottom:1px solid rgb(236, 232, 232) ;
}
table td{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    border-bottom:1px solid rgb(236, 232, 232) ;
    color: #000000;
}
.actif span{
    display: inline-block;
    background: #E9F9EF;
    border: 0.5px solid #28C75D;
    border-radius: 4px;
    padding: 2px 8px;
    width: 90px;
    text-align: center;
    height: 24px;
    font-weight: 600;
   font-size: 14px;
   line-height: 20px;
   color: #28C75D;
}
.inactif span{
    display: inline-block;
    background: #FFEEED;
    border: 0.5px solid #FF564E;;
    border-radius: 4px;
    padding: 2px 8px;
    width: 90px;
    text-align: center;
    height: 24px;
    font-weight: 600;
   font-size: 14px;
   line-height: 20px;
   color: #FF564E;;
}
.action span{
    cursor: pointer;
    color: #6B7A99;
    font-size: 30px;
    font-weight: 600;
}


</style>