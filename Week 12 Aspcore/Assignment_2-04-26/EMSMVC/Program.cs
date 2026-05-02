var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
var employeeApiBaseUrl = builder.Configuration["ApiSettings:EmployeeApiBaseUrl"] ?? "http://emsapi:8080/";
builder.Services.AddHttpClient("EmployeeApi", client =>
{
    client.BaseAddress = new Uri(employeeApiBaseUrl);
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");

    if (!app.Environment.IsEnvironment("Docker"))
    {
        // HSTS only makes sense when the app is actually serving HTTPS.
        app.UseHsts();
    }
}

if (!app.Environment.IsEnvironment("Docker"))
{
    app.UseHttpsRedirection();
}

app.UseRouting();

app.UseAuthorization();

app.MapStaticAssets();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}")
    .WithStaticAssets();


app.Run();
