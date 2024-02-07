using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class DataContext : IdentityDbContext<AppUser>
{
    private readonly DbContextOptions _options;

    public DataContext(DbContextOptions options) : base(options)
    {
        _options = options;
        
    }

    public DbSet<Activity> Activities { get; set; }
    public DbSet<Link> MangaLinks { get; set; }
}