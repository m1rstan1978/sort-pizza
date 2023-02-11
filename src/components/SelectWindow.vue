<template>
  <transition name="select-fade">
    <div class="select" v-if="selectActiveWindow">
        <div class="select__content">
          <p class="select__text" 
            v-for="words in selectWords" 
            :key="words.title"
            :class="{ ActiveClassWord: sortedWord === words.title }" 
            @click="$emit('active', words.title, words.sort)"
            >{{ words.title }}
          </p>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
    props:{
        selectWords:{
            type:Array
        },
        selectActiveWindow:{
            type:Boolean
        },
        sortedWord:{
            type:String,
        }
    }
}
</script>

<style scoped>
.select {
    position: absolute;
    left:-18%;
    top:150%;
    background: white;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
}
.select__content {
    text-align: center;
    margin: 13px 0;
}
.select__text {
    font-weight: 400;
    font-size: 14px;
    padding: 11px 20px;
    color: #000000;
    transition: all 0.3s ease;
    cursor: pointer;
}
.select__text:hover {
    background: rgba(254, 95, 30, 0.05);
    color: #FE5F1E;
}
.ActiveClassWord {
    color: #FE5F1E;
}
.select-fade-enter-active {
    transition: all 0.3s;
}

.select-fade-leave-active {
    transition: all 0.3s ease;
}

.select-fade-enter-from {
    transform: translateX(20px);
    opacity: 0;
}
.select-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>