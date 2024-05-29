using Microsoft.EntityFrameworkCore;
using FoodPlanner.Models;

class FoodPlannerDB : DbContext
{
    public FoodPlannerDB(DbContextOptions options) : base(options) { }
    public DbSet<User> Users { get; set; } = null!;
    public DbSet<Recipe> Recipe { get; set; } = null!;
    public DbSet<Ingredient> Ingredient { get; set; } = null!;
}