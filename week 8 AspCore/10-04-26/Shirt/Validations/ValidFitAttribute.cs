using System.ComponentModel.DataAnnotations;
using ShirtApp.Models.Enums;

namespace ShirtApp.Validations
{
    public class ValidFitAttribute : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext context)
        {
            if (value is not FitType)
                return new ValidationResult("Invalid fit type");

            return ValidationResult.Success;
        }
    }
}