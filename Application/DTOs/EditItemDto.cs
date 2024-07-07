using Microsoft.AspNetCore.Http;

namespace Application.DTOs
{
    public class EditItemDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public IFormFile? Image { get; set; }
    }
}