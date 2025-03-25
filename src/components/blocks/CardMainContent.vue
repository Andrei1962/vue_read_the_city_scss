<template>
  <div class="list">
    <CardProduct
      v-for="(item, i) in dataBooks"
      :key="i"
      :title="item.name"
      :subtitle="item.description"
      :srcImg="item.image"
      :price="item.cost"
    />
  </div>
</template>

<script>
// import { ref } from 'vue'
import CardProduct from '@/components/elements/CardProduct.vue'

export default {
  name: 'CardsMain',
  components: {
    CardProduct
  },
  props: {
  },
  setup () {
    const dataBooks = ([
      {
        name: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ',
        cost: '2 700 ₽',
        image: require('@/assets/images/1.png')
      },
      {
        name: 'Свиные ребрышки на гриле с зеленью',
        description: 'Не следует, однако забывать, что реализация намеченных плановых',
        cost: '1 600 ₽',
        image: require('@/assets/images/2.png')
      },
      {
        name: 'Креветки по-королевски в лимонном соке',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
        cost: '1 820 ₽',
        image: require('@/assets/images/3.png')
      },
      {
        name: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        cost: '2 700 ₽',
        image: require('@/assets/images/4.png')
      },
      {
        name: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ',
        cost: '2 700 ₽',
        image: require('@/assets/images/1.png')
      },
      {
        name: 'Свиные ребрышки на гриле с зеленью',
        description: 'Не следует, однако забывать, что реализация намеченных плановых',
        cost: '1 600 ₽',
        image: require('@/assets/images/2.png')
      },
      {
        name: 'Креветки по-королевски в лимонном соке',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
        cost: '1 820 ₽',
        image: require('@/assets/images/3.png')
      },
      {
        name: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        cost: '2 700 ₽',
        image: require('@/assets/images/4.png')
      }
    ])

    return {
      dataBooks
    }
  }
}
</script>

<style lang="scss" scoped>

.list {
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  gap: 35px 20px;
  align-items: center;
  justify-content: center;
  padding-bottom: 70px;
  margin: 0 auto;
}

</style>
