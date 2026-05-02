using System.ComponentModel.DataAnnotations;
using ShirtApp.Models.Enums;

namespace ShirtApp.Validations
{
    public class ValidSleeveAttribute : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext context)
        {
            if (value is not SleeveType)
                return new ValidationResult("Invalid sleeve type");

            return ValidationResult.Success;
        }
    }
} 