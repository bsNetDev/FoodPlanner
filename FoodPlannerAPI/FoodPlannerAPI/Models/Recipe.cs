using System.ComponentModel.DataAnnotations;

namespace FoodPlanner.Models {
    public class Recipe {
        [Key]
        public int UserId {get; set;}
        public string IngredientId {get; set;}
        public string Number {get; set;}
    }
}