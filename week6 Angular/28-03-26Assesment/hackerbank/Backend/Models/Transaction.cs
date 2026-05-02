namespace HackerBank.Api.Models;

public class Transaction
{
    public int Id { get; set; }
    public string Date { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public int Type { get; set; }        // 0 = Credit, 1 = Debit
    public decimal Amount { get; set; }
    public string Balance { get; set; } = string.Empty;
}