<template>
  <div class="card-wrapper" v-show="isDialog">
    <div class="flex">
      <div class="card">
        <div class="card--header">
          <button @click="closeDialog">X</button>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa mollitia
        fugiat, eos id omnis ut aliquid quis rem necessitatibus dolore quas
        voluptates sed blanditiis molestias, beatae delectus incidunt fuga, et
        cum accusantium? Quaerat, ducimus inventore magni non iste saepe
        blanditiis quasi illum, minus doloremque tenetur dolor libero maiores
        obcaecati ratione, natus laborum nostrum ab voluptas consequuntur nemo
        voluptatibus praesentium reprehenderit. Veniam fugiat deleniti iure
        saepe, aperiam eaque, veritatis in ratione aliquid ipsum commodi sed
        incidunt sequi explicabo sapiente consequuntur eveniet voluptate porro
        quibusdam deserunt. Placeat, eum maxime? Eligendi similique, temporibus
        alias magni fuga incidunt natus ipsa architecto sit voluptas voluptatum
        eaque omnis amet sequi laboriosam nostrum hic nemo nesciunt molestias,
        soluta cum? Minus, deserunt fugit! In officiis molestias odit cum iste,
        dolorem quos, dolores voluptatem harum, omnis at nam non nulla assumenda
        consequuntur doloremque ea dolore rerum quae qui eaque eos mollitia
        facilis. Ullam excepturi a repellat rerum ex blanditiis dignissimos
        repellendus dicta aliquam iste. Eius maiores nihil quasi ullam
        reiciendis illum molestias aspernatur incidunt, excepturi praesentium,
        fugit suscipit tempora error quae? Delectus quod facere quisquam veniam?
        Nostrum consequatur laudantium commodi dicta, aut nemo ipsam modi rem
        pariatur facilis beatae cum deserunt repellat? Officiis fugit illo id
        atque nulla quisquam? Hic, illum commodi, consectetur veritatis,
        asperiores nulla ipsa sequi aliquid nam autem tenetur error! Itaque
        molestiae suscipit repellendus vitae voluptatum, quos vero veniam, unde
        eius cupiditate laboriosam perspiciatis. Repudiandae consequuntur quod
        suscipit ut fuga provident tempore, aliquid velit ad repellendus iusto
        reiciendis recusandae distinctio quisquam architecto libero, rem soluta
        delectus debitis. Laudantium minima minus reprehenderit quos adipisci
        temporibus nemo perspiciatis ipsum mollitia delectus dicta, sed suscipit
        dolorem fuga atque reiciendis sint aliquam cumque voluptatibus
        consectetur earum illum fugiat? Recusandae suscipit aut dolores
        reiciendis necessitatibus doloremque iusto delectus neque culpa
        cupiditate. Voluptatum inventore recusandae vero dolor nesciunt nostrum
        itaque asperiores nobis.
      </div>
    </div>
  </div>
</template>

<script setup>
const isDialog = ref(false)

function closeDialog() {
  isDialog.value = false
}

defineExpose({
  isDialog,
})
</script>

<style lang="scss">
.card-wrapper {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 100;
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    .card {
      margin: 0 10px;
      padding: 20px 20px 0 20px;
      max-width: 960px;
      min-height: 800px;
      border-radius: 10px 10px 0 0;
      z-index: 100;
      background: rgba(74, 144, 226, 0.5);
      backdrop-filter: blur(10.5px);
      -webkit-backdrop-filter: blur(10.5px);
      border: 1px solid rgba(255, 255, 255, 0.18);
    }
  }
}
</style>
