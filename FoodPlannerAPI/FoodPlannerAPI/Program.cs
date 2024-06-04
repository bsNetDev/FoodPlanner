using Microsoft.EntityFrameworkCore;
using FoodPlanner.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<FoodPlannerDB>(options => options.UseInMemoryDatabase("FoodPlannerDB"));
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseCors("AllowAll");
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGet("/login/{email}/{password}", (string email, string password, FoodPlannerDB db) => {
    var user = db.Users.Where(u => u.Email == email && u.Password == password).FirstOrDefault();
    if (user != null)
        return "LOGGEDIN";
    else
        return "NOTLOGGEDIN";
});

app.MapGet("/getUsers", async (FoodPlannerDB db) => {
    return await db.Users.ToListAsync();
});

app.MapPost("/createUser", async (FoodPlannerDB db, User user) =>
{
    var existingUser = db.Users.FirstOrDefault(u => u.Email == user.Email);
 
    if (existingUser == null) {
        await db.Users.AddAsync(user);
        await db.SaveChangesAsync();
        return Results.Created($"/users/{user.Email}", user);
    }
    else
        return Results.Created($"/users/{user.Email}", "User is already in database.");
});

app.MapGet("/getIngredients", async (FoodPlannerDB db) => {
    return await db.Ingredients.ToListAsync();
});

app.MapPost("/addIngredient", async (FoodPlannerDB db, Ingredient ingredient) =>
{
    var existingIngredient = db.Ingredients.FirstOrDefault(ing => ing.Name == ingredient.Name);

    if (existingIngredient == null) {
        await db.Ingredients.AddAsync(ingredient);
        await db.SaveChangesAsync();
        return Results.Created($"/ingredients/{ingredient.Name}", ingredient);
    }
    else
        return Results.Created($"/ingredients/{ingredient.Name}", "Ingredient already in database.");
});

app.MapGet("/getRecipes", async (FoodPlannerDB db) => {
    return await db.Recipes.ToListAsync();
});

app.MapPost("/addRecipe", async (FoodPlannerDB db, Recipe[] recipeItems) =>
{
    await db.Recipes.AddRangeAsync(recipeItems);
    await db.SaveChangesAsync();
    return Results.Created($"/recipes/{recipeItems}", recipeItems);
});

app.Run();
