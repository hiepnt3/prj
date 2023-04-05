<template>
  <div class="new">
    <ul class="new__Main">
      <li v-for="item in itemNew" :key="item.id" class="new__item">
        <div class="image">
          <img :src="item.image" alt="" />
        </div>
        <div class="infor">
          <p class="infor__name">{{ item.name }}</p>
          <p class="infor__price">{{ item.price }}.00$</p>
        </div>
        <div class="options">
          <ul class="options__inner d-flex justify-content-center">
            <li class="options__item">
              <i class="bi bi-three-dots"></i>
            </li>
            <li class="options__item">
              <i class="bi bi-bag"></i>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "new",
  data() {
    return {
      itemNew: [
        {
          id: 16,
          name: "Banana",
          price: 45,
          image:
            "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg",
          category: "fruits",
        },
        {
          id: 17,
          name: "Grapes",
          price: 60,
          image:
            "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/grapes.jpg",
          category: "fruits",
        },
        {
          id: 18,
          name: "Mango",
          price: 75,
          image:
            "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg",
          category: "fruits",
        },
        {
          id: 19,
          name: "Musk Melon",
          price: 36,
          image:
            "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/musk-melon.jpg",
          category: "fruits",
        },
        {
          id: 20,
          name: "Orange",
          price: 75,
          image:
            "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/orange.jpg",
          category: "fruits",
        },
        {
          id: 21,
          name: "Pears",
          price: 69,
          image:
            "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pears.jpg",
          category: "fruits",
        },
        {
          id: 22,
          name: "Pomegranate",
          price: 95,
          image:
            "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pomegranate.jpg",
          category: "fruits",
        },
        {
          id: 23,
          name: "Raspberry",
          price: 160,
          image:
            "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/raspberry.jpg",
          category: "fruits",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/mixin";
@import "../../../../assets/scss/variables";
img {
  width: 100%;
  object-fit: cover;
}
.new {
  &__Main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  &__item {
    position: relative;
    &:hover {
      .options {
        opacity: 1;
        transition: 0.2s;
        transform: translateY(-320%);
      }
    }
    .infor {
      background-color: $inforItembg;
      &__name {
        @include inforTitle(16px, 700, 1, 1px);
        padding: 20px 0 10px 0;
      }
      &__price {
        @include inforTitle(15px, 700, 1, 1px);
        padding: 10px 0 20px 0;
        color: $mainColor;
      }
    }
    .options {
      position: absolute;
      width: 100%;
      opacity: 0;
      transition: 0.4s;
      &__inner {
        gap: 40px;
      }
      &__item {
        // opacity: 0.8;
        font-size: 20px;
        padding: 10px;
        border-radius: 50%;
        background-color: white;
        box-shadow: 0 15px 25px rgba(27, 26, 26, 0.08);
        transition: 0.3s;
        &:hover {
          background-color: $mainColor;
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }
      }
    }
  }
}
@media only screen and (max-width: 990px) {
  .new {
    &__Main {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
@media only screen and (max-width: 768px) {
  .new {
    &__Main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>