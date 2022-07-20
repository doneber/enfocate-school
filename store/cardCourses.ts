import { defineStore } from 'pinia'

export interface CardCourse {
    id: string,
    nameCourse: string,
    // path: string,
}

export interface CardCourseState {
    cardCourses: CardCourse[] | undefined[],
}

export interface CardCourseAdd {
    nameCourse: string,
}

const state = (): CardCourseState => ({
    cardCourses: [
        {
            id: '1',
            nameCourse: 'VueJs Master',
        },
        {
            id: '2',
            nameCourse: 'Data Structure',
        }
    ],
})

const getters = {
    getById: (state: CardCourseState) => (id: string) => {
        return state.cardCourses.find(course => course.id === id)
    },
    allCardCourses: (state: CardCourseState) => state.cardCourses,
}
// const actions = {
//     add(partialCardCourse: CardCourseAdd) {
//         const newCardCourse: CardCourse = {
//             id: new Date().getTime().toString(),
//             nameCourse: partialCardCourse.nameCourse,
//         }
//         this.cardCourses.push(newCardCourse)
//     }
// }

export const useCardCoursesStore = defineStore("cardCoursesStore", {
    state,
    getters,
    // actions,
})