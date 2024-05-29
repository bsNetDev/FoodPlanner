using Microsoft.EntityFrameworkCore;
using FoodPlanner.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<FoodPlannerDB>(options => options.UseInMemoryDatabase("FoodPlannerDB"));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

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

app.MapPost("/createUser", async (FoodPlannerDB db, User user) =>
{
    await db.Users.AddAsync(user);
    await db.SaveChangesAsync();
    return Results.Created($"/users/{user.Email}", user);
});


app.Run();
