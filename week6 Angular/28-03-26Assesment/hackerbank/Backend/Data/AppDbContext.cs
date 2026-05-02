using HackerBank.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace HackerBank.Api.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Transaction> Transactions => Set<Transaction>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Transaction>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Date).HasMaxLength(10).IsRequired();
            entity.Property(e => e.Description).HasMaxLength(500).IsRequired();
            entity.Property(e => e.Amount).HasColumnType("decimal(18,2)");
            entity.Property(e => e.Balance).HasMaxLength(50).IsRequired();
        });

        modelBuilder.Entity<Transaction>().HasData(
            new Transaction { Id = 1,  Date = "2019-12-03", Description = "HACKERBANK INC. DES:CCD+ ID: 33375894749",       Type = 0, Amount = 1985.40m, Balance = "$12,234.45" },
            new Transaction { Id = 2,  Date = "2019-12-03", Description = "TRANSFER FROM SAVINGS DES:TRANSFER ID: 77291038471", Type = 0, Amount = 500.00m,  Balance = "$12,734.45" },
            new Transaction { Id = 3,  Date = "2019-12-04", Description = "WALMART SUPERCENTER #4281 PURCHASE",              Type = 1, Amount = 134.56m,  Balance = "$12,599.89" },
            new Transaction { Id = 4,  Date = "2019-12-04", Description = "NETFLIX.COM SUBSCRIPTION",                        Type = 1, Amount = 12.99m,   Balance = "$12,586.90" },
            new Transaction { Id = 5,  Date = "2019-12-05", Description = "DIRECT DEPOSIT - PAYROLL",                        Type = 0, Amount = 3200.00m, Balance = "$15,786.90" },
            new Transaction { Id = 6,  Date = "2019-12-05", Description = "ATM WITHDRAWAL - MAIN ST BRANCH",                 Type = 1, Amount = 200.00m,  Balance = "$15,586.90" },
            new Transaction { Id = 7,  Date = "2019-12-06", Description = "AMAZON.COM PURCHASE ORDER #112-3948571",          Type = 1, Amount = 89.99m,   Balance = "$15,496.91" },
            new Transaction { Id = 8,  Date = "2019-12-06", Description = "STARBUCKS #00384 COFFEE PURCHASE",                Type = 1, Amount = 6.75m,    Balance = "$15,490.16" },
            new Transaction { Id = 9,  Date = "2019-12-07", Description = "UTILITY BILL PAYMENT - GAS & ELECTRIC",           Type = 1, Amount = 145.23m,  Balance = "$15,344.93" },
            new Transaction { Id = 10, Date = "2019-12-07", Description = "INTEREST CREDIT - SAVINGS BONUS",                 Type = 0, Amount = 22.50m,   Balance = "$15,367.43" }
        );
    }
}