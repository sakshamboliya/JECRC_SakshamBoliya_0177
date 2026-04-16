using System.ComponentModel.DataAnnotations;
using ShirtApp.Models.Enums;
using ShirtApp.Validations;

namespace ShirtApp.Models
{
    [ShirtBusinessRule]
    public class Shirt
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public ShirtPattern Pattern { get; set; }

        public SleeveType Sleeve { get; set; }

        public FitType Fit { get; set; }
    }
}