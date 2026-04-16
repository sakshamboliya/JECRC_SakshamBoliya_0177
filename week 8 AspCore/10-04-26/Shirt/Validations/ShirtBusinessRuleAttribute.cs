using System.ComponentModel.DataAnnotations;
using ShirtApp.Models;
using ShirtApp.Models.Enums;

namespace ShirtApp.Validations
{
    public class ShirtBusinessRuleAttribute : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext context)
        {
            var shirt = (Shirt)context.ObjectInstance;

            if (shirt.Fit == FitType.Oversized && shirt.Sleeve == SleeveType.Half)
            {
                return new ValidationResult("Oversized shirts cannot be half sleeve");
            }

            return ValidationResult.Success;
        }
    }
}