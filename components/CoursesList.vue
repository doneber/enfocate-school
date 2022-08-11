<script setup>
const { data: courseList } = useAsyncData('courseList', () => {
    return queryContent('/').find()
})
</script>
<template>
    <ul>
        <li>
            <a :href="courseList._path">{{ courseList._path }}</a>
        </li>
        <li>Card 2</li>
        <li>Card 3</li>
    </ul>
</template>
<style scoped>
ul {
    /* list-style: none; */
    padding: 0;
    color: teal;
}
</style>