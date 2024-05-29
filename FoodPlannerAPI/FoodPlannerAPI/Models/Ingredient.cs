using System.ComponentModel.DataAnnotations;

namespace FoodPlanner.Models {
    public class Ingredient {
        [Key]
        public int IngredientId {get; set;}
        public string Name {get; set;}
        public string Measurement {get; set;}
    }
}