using System.ComponentModel.DataAnnotations;

namespace SalaryApp.Models
{
    public class SalaryRangeRequest:ValidationAttribute
    {
        public readonly int maxsalary;
        public maxsalary(int maxsalary)
        {
            this.maxsalary=maxsalary;
        }
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if(value is decimal salary && maxsalary < salary)
            {
                return new ValidationResult($"salary must be less {maxsalary}");
            }
            return ValidationResult.Success;
    }
     public class ValidMinSalaryAttribute : ValidationAttribute
    {
        private readonly decimal minSalary;

        public ValidMinSalaryAttribute(decimal minSalary)
        {
            this.minSalary = minSalary;
        }

        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value is decimal salary && salary < minSalary)
            {
                return new ValidationResult($"Salary must be greater than or equal to {_minSalary}");
            }

            return ValidationResult.Success;
        }
}


    public class ValidPasswordAttribute : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value is not string password)
                return new ValidationResult("Password is required");

            if (password.Length < 8)
                return new ValidationResult("Password must be at least 8 characters long");

            bool hasUpper = false;
            bool hasLower = false;
            bool hasDigit = false;
            bool hasSpecial = false;

            foreach (char c in password)
            {
                if (char.IsUpper(c)) hasUpper = true;
                else if (char.IsLower(c)) hasLower = true;
                else if (char.IsDigit(c)) hasDigit = true;
                else if (!char.IsLetterOrDigit(c)) hasSpecial = true;
            }

            if (!hasUpper)
                return new ValidationResult("Password must contain at least one uppercase letter");

            if (!hasLower)
                return new ValidationResult("Password must contain at least one lowercase letter");

            if (!hasDigit)
                return new ValidationResult("Password must contain at least one number");

            if (!hasSpecial)
                return new ValidationResult("Password must contain at least one special character");

            return ValidationResult.Success;
        }
    }
}

}