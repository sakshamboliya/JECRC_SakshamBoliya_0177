using HackerBank.Api.Data;
using HackerBank.Api.DTOs;
using HackerBank.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HackerBank.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TransactionsController(AppDbContext db) : ControllerBase
{
    // GET /api/transactions?date=2019-12-03&sortBy=amount&sortOrder=asc
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Transaction>>> GetAll(
        [FromQuery] TransactionQueryDto query)
    {
        IQueryable<Transaction> q = db.Transactions;

        if (!string.IsNullOrWhiteSpace(query.Date))
            q = q.Where(t => t.Date == query.Date);

        if (query.SortBy?.ToLower() == "amount")
            q = query.SortOrder?.ToLower() == "desc"
                ? q.OrderByDescending(t => t.Amount)
                : q.OrderBy(t => t.Amount);

        return Ok(await q.ToListAsync());
    }

    // GET /api/transactions/5
    [HttpGet("{id:int}")]
    public async Task<ActionResult<Transaction>> GetById(int id)
    {
        var t = await db.Transactions.FindAsync(id);
        return t is null ? NotFound() : Ok(t);
    }

    // POST /api/transactions
    [HttpPost]
    public async Task<ActionResult<Transaction>> Create(
        [FromBody] CreateTransactionDto dto)
    {
        var transaction = new Transaction
        {
            Date        = dto.Date,
            Description = dto.Description,
            Type        = dto.Type,
            Amount      = dto.Amount,
            Balance     = dto.Balance
        };

        db.Transactions.Add(transaction);
        await db.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById),
            new { id = transaction.Id }, transaction);
    }

    // DELETE /api/transactions/5
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var t = await db.Transactions.FindAsync(id);
        if (t is null) return NotFound();

        db.Transactions.Remove(t);
        await db.SaveChangesAsync();
        return NoContent();
    }
}