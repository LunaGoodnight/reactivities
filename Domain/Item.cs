using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Domain;

public class Item
{
    public Guid Id { get; set; }
    public String Name { get; set; }
    public String Description { get; set; }

    public String? ImageUrl { get; set; }
}