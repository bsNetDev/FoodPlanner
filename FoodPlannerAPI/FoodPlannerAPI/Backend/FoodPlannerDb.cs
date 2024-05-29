using Microsoft.EntityFrameworkCore;
using FoodPlanner.Models;

class FoodPlannerDB : DbContext
{
    public FoodPlannerDB(DbContextOptions options) : base(options) { }
    public DbSet<User> Users { get; set; } = null!;
    public DbSet<Recipe> Recipes { get; set; } = null!;
    public DbSet<Ingredient> Ingredients { get; set; } = null!;
}