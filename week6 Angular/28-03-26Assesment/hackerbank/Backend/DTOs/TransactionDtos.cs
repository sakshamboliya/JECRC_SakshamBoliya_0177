namespace HackerBank.Api.DTOs;

public record CreateTransactionDto(
    string Date,
    string Description,
    int Type,
    decimal Amount,
    string Balance
);

public record TransactionQueryDto(
    string? Date,
    string? SortBy,
    string? SortOrder
);