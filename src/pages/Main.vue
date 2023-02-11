<template>
  <div class="pizza">
   <div class="pizza__content">
    <navbar></navbar>
    <div class="pizza__about">
        <div class="pizza__menu">
            <type-button 
            v-for="(typeinpizza, idx) in typePizzasArray" 
            :key="typeinpizza.id" 
            :idx="idx" 
            @active="setActiveButton"
            :class="{ activeButton: activeButtonNum === idx }"
            >{{ typeinpizza.name }}
            </type-button>
        </div>
        <div class="pizza__sort">
            <div class="pizza__icon">
                <img src="../assets/icons/triangle.svg">
            </div>
            <p class="pizza__sorted">Сортировка по:</p>
            <div class="pizza__select">
                <p class="pizza__word" 
                @click="selectActiveWindow = true"
                onselectstart="return false" 
                onmousedown="return false" 
                >{{ sortedWord }}</p>
                <select-window
                :selectWords="selectWords"
                :selectActiveWindow="selectActiveWindow"
                :sortedWord="sortedWord"
                @active="setActiveWord"
                v-click-away="setAwayClick"
                ></select-window>
            </div>
        </div>
    </div>
    <div class="pizza__list">
        <p class="pizza__all">Все пиццы</p>
        <div class="pizza__items">
            <pizza-item
            v-for="pizzasArr in SortPizzas"
            :key="pizzasArr.sort"
            :pizzasArr="pizzasArr"
            ></pizza-item>
        </div>
    </div>
   </div> 
  </div>
</template>

<script>
import pizzas from '@/pizzas'
import typePizzas from '@/typePizzas'
import Navbar from '@/components/Navbar.vue'
import TypeButton from '@/components/UI/type-button'
import SelectWindow from '@/components/SelectWindow.vue'
import PizzaItem from '@/components/PizzaItem.vue'

export default {
    data(){
        return {
            typePizzasArray:typePizzas,
            typePizzasName:'Все',
            activeButtonNum:0,
            sortedWord:'популярности',
            selectWords:[
                { title:'популярности', sort:'rating' },
                { title: 'по цене', sort: 'price' },
                { title: 'по алфавиту', sort:'name' },
            ],
            sortedWordsInComputed:'rating',
            selectActiveWindow:false,
            pizzasArray: pizzas
        }
    },
    methods:{
        setActiveButton( idx ) {
            this.activeButtonNum = idx
            this.typePizzasName = this.typePizzasArray[idx].name
        },
        setActiveWord( word, sortedWords ) {
            this.sortedWord = word
            this.selectActiveWindow = false
            this.sortedWordsInComputed = sortedWords
        },
        setAwayClick() {
            this.selectActiveWindow = false
        }
    },
    computed:{
        SortTypePizzas() {
            if (this.typePizzasName === 'Все') {
                return this.pizzasArray
            }
            else {
                return this.pizzasArray.filter(el => el.type === this.typePizzasName)
            }
        },
        SortPizzas() {
            return this.SortTypePizzas.sort((a, b) =>  {
                if (a[this.sortedWordsInComputed] < b[this.sortedWordsInComputed]) return -1
                if (a[this.sortedWordsInComputed] > b[this.sortedWordsInComputed]) return 1
                return 0
            })
        }
    },
    watch:{
    },
    mounted() {

    },
    components:{Navbar, TypeButton, SelectWindow, PizzaItem}
} 
</script>

<style scoped>
.pizza {
    background: #FFDF8C;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.pizza__content {
    max-width: 1440px;
    background: #fff;
    border-radius: 10px;
    margin:50px 0 50px 0;
}
.pizza__about {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    padding: 0 67px;
}
.activeButton {
background: #282828;
color:white;
}
.pizza__sort {
    display: flex;
    align-items: center;
    min-width: 250px;
}
.pizza__icon {
    margin-right: 6px;
}
.pizza__sorted {
    font-weight: 600;
    font-size: 14px;
    margin-right: 13px;
    color: #2C2C2C;
}
.pizza__select {
    position: relative;
}
.pizza__word {
    font-weight: 400;
    font-size: 14px;
    border-bottom: 1px dashed #FE5F1E;
    color: #FE5F1E;
    cursor: pointer;
}
.pizza__list {
    padding: 0 67px;
}
.pizza__all {
    font-weight: 700;
    font-size: 32px;
    margin-top: 32px;
    color: #000000;
}
.pizza__items {
    display: grid;
    grid-template-columns: repeat( 4, 1fr );
    margin-top: 15px;
    margin-bottom: 55px;
}
</style>