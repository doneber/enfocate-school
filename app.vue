<template>
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nostrum at accusantium harum doloremque delectus dolore hic consectetur maiores nisi? Fugit, atque eos. Debitis mollitia corrupti magni! Eos, cupiditate sequi!</p>
    <div v-for="course in allCardCourses" :key="course.id">
      <p>{{ course.nameCourse }} - <span>{{ course.id }}</span></p>
    </div>
  </div>
</template>
<script setup>
    import { useCardCoursesStore } from '~/store/cardCourses.ts'

    const cardCoursesStore = useCardCoursesStore()
    const allCardCourses = cardCoursesStore.allCardCourses
</script>
