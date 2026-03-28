using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace HackerBank.Api.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Transactions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    Type = table.Column<int>(type: "int", nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Balance = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transactions", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Transactions",
                columns: new[] { "Id", "Amount", "Balance", "Date", "Description", "Type" },
                values: new object[,]
                {
                    { 1, 1985.40m, "$12,234.45", "2019-12-03", "HACKERBANK INC. DES:CCD+ ID: 33375894749", 0 },
                    { 2, 500.00m, "$12,734.45", "2019-12-03", "TRANSFER FROM SAVINGS DES:TRANSFER ID: 77291038471", 0 },
                    { 3, 134.56m, "$12,599.89", "2019-12-04", "WALMART SUPERCENTER #4281 PURCHASE", 1 },
                    { 4, 12.99m, "$12,586.90", "2019-12-04", "NETFLIX.COM SUBSCRIPTION", 1 },
                    { 5, 3200.00m, "$15,786.90", "2019-12-05", "DIRECT DEPOSIT - PAYROLL", 0 },
                    { 6, 200.00m, "$15,586.90", "2019-12-05", "ATM WITHDRAWAL - MAIN ST BRANCH", 1 },
                    { 7, 89.99m, "$15,496.91", "2019-12-06", "AMAZON.COM PURCHASE ORDER #112-3948571", 1 },
                    { 8, 6.75m, "$15,490.16", "2019-12-06", "STARBUCKS #00384 COFFEE PURCHASE", 1 },
                    { 9, 145.23m, "$15,344.93", "2019-12-07", "UTILITY BILL PAYMENT - GAS & ELECTRIC", 1 },
                    { 10, 22.50m, "$15,367.43", "2019-12-07", "INTEREST CREDIT - SAVINGS BONUS", 0 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Transactions");
        }
    }
}
