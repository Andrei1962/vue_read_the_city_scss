
export default {
  state: {
    Products: [
      {
        id: 0,
        img: require('@/assets/images/1.png'),
        title: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: '2 700'
      },
      {
        id: 1,
        img: require('@/assets/images/2.png'),
        title: 'Свиные ребрышки на гриле с зеленью',
        description: 'Не следует, однако забывать, что реализация намеченных плановых',
        price: '1 600'
      },
      {
        id: 2,
        img: require('@/assets/images/3.png'),
        title: 'Креветки по-королевски в лимонном соке',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
        price: '1 820'
      },
      {
        id: 3,
        img: require('@/assets/images/4.png'),
        title: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: '2 700'
      },
      {
        id: 4,
        img: require('@/assets/images/1.png'),
        title: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: '2 700'
      },
      {
        id: 5,
        img: require('@/assets/images/2.png'),
        title: 'Свиные ребрышки на гриле с зеленью',
        description: 'Не следует, однако забывать, что реализация намеченных плановых',
        price: '1 600'
      },
      {
        id: 6,
        img: require('@/assets/images/3.png'),
        title: 'Креветки по-королевски в лимонном соке',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
        price: '1 820'
      },
      {
        id: 7,
        img: require('@/assets/images/4.png'),
        title: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: '2 700'
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
    setAddProductsInBasket: (state, val) => {
      const product = state.Products.find((item) => item.id === val)
      if (product) {
        state.BasketProducts.push(product)
      }
      state.CountProductsInBasket = state.BasketProducts.length
      state.AllPriceProductsInBasket = state.BasketProducts
        .reduce((sum, current) => { return sum + current.price }, 0)
    },
    setDeleteProductInBasket: (state, val) => {
      state.BasketProducts = state.BasketProducts.filter((item) => item.id !== val)
      state.CountProductsInBasket = state.BasketProducts.length
      state.AllPriceProductsInBasket = state.BasketProducts
        .reduce((sum, current) => { return sum + current.price }, 0)
    }
  }
}
