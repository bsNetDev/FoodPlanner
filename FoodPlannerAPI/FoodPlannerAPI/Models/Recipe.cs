using System.ComponentModel.DataAnnotations;

namespace FoodPlanner.Models {
    public class Recipe {
        [Key]
        public int RecipeId {get; set;}
        public int UserId {get; set;}

        public string RecipeName { get; set; }
        public int IngredientId {get; set;}
        public int Number {get; set;}
    }
}