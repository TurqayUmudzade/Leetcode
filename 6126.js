import {
    MaxPriorityQueue,
    MinPriorityQueue,
} from "@datastructures-js/priority-queue";


class FoodRatings {
    constructor(foods, cuisines, ratings) {
        this.foods = foods
        this.cuisines = cuisines
        this.ratings = ratings
        this.CusineRating = new Map()
        this.ratingfood = new Map()

        for (let i = 0; i < cuisines.length; i++) {
            let key = this.cuisines[i]
            if (!this.CusineRating.has(key))
                this.CusineRating.set(cuisines[i], [ratings[i]])
            else {
                let rating = this.CusineRating.get(key)
                this.CusineRating.set(cuisines[i], [...rating, ratings[i]])
            }
        }
        for (let i = 0; i < ratings.length; i++) {
            let key = this.ratings[i]
            if (!this.ratingfood.has(key))
                this.ratingfood.set(cuisines[i], [foods[i]])
            else {
                let rating = this.ratingfood.get(key)
                this.ratingfood.set(cuisines[i], [...rating, ratings[i]])
            }
        }


    }

    changeRating(food, newRating) {
        let index = this.CusineRating.get(food)
        this.ratings[index] = newRating
    }

    highestRated(cuisine) {

    };
}

