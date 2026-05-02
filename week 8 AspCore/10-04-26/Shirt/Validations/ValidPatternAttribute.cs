using System.ComponentModel.DataAnnotations;

namespace ShirtApp.Validations
{
    public class ValidPatternAttribute : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext context)
        {
            return value == null ? new ValidationResult("Pattern required") : ValidationResult.Success;
        }
    }
}