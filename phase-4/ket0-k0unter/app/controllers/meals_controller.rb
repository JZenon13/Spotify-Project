class MealsController < ApplicationController

    def index
        meal = Meal.all
        render json: meal
    end


end
