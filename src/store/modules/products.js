
export default {
  state: {
    Products: [
      {
        id: 0,
        img: require('@/assets/images/1.png'),
        title: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700
      },
      {
        id: 1,
        img: require('@/assets/images/2.png'),
        title: 'Свиные ребрышки на гриле с зеленью',
        description: 'Не следует, однако забывать, что реализация намеченных плановых',
        price: 1600
      },
      {
        id: 2,
        img: require('@/assets/images/3.png'),
        title: 'Креветки по-королевски в лимонном соке',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
        price: 1820
      },
      {
        id: 3,
        img: require('@/assets/images/4.png'),
        title: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700
      },
      {
        id: 4,
        img: require('@/assets/images/1.png'),
        title: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700
      },
      {
        id: 5,
        img: require('@/assets/images/2.png'),
        title: 'Свиные ребрышки на гриле с зеленью',
        description: 'Не следует, однако забывать, что реализация намеченных плановых',
        price: 1600
      },
      {
        id: 6,
        img: require('@/assets/images/3.png'),
        title: 'Креветки по-королевски в лимонном соке',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
        price: 1820
      },
      {
        id: 7,
        img: require('@/assets/images/4.png'),
        title: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700
      }
    ],
    CountProductsInBasket: 0,
    AllPriceProductsInBasket: 0,
    BasketProducts: []
  },
  getters: {
    getProducts: state => state.Products,
    getCountProductsInBasket: state => state.CountProductsInBasket,
    getAllPriceProductsInBasket: state => state.AllPriceProductsInBasket,
    getBasketProducts: state => state.BasketProducts
  },
  mutations: {
    setAddProductsInBasket (state, val) {
      state.BasketProducts.push(val)
      this.commit('setUpdateCounts')
    },
    setDeleteProductsInBasket (state, val) {
      state.BasketProducts = state.BasketProducts.filter((item) => item.idx !== val)
      this.commit('setUpdateCounts')
    },
    setCurrentProduct (state, val) {
      state.Products.forEach((item) => {
        if (item.idx === +val) {
          state.CurrentProduct = item
        }
      })
    },
    setUpdateCounts (state) {
      state.CountProductsInBasket = state.BasketProducts.length
      state.AllPriceProductsInBasket = state.BasketProducts.reduce((sum, current) => { return sum + current.price }, 0)
    }
  }
}
