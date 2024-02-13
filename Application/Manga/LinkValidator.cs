using Domain;
using FluentValidation;

namespace Application.Manga;

public class MangaValidator : AbstractValidator<Link>
{
    public MangaValidator()
    {
        RuleFor(x => x.Title).NotEmpty();
        RuleFor(x => x.Domain).NotEmpty();
    }
}