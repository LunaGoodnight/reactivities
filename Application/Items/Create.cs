using Application.Core;
using Application.Manga;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Items;

public class Create
{
    public class Command : IRequest<Result<Unit>>
    {
        public Item Item { get; set; }
    }
    
    public class CommandValidator : AbstractValidator<Command>
    {
        public CommandValidator()
        {
            RuleFor(x => x.Item).SetValidator(new ItemValidator());
        }
    }

    public class Handler : IRequestHandler<Command, Result<Unit>>
    {
        private readonly DataContext _context;

        public Handler(DataContext context)
        {
            _context = context;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            
            // Check the current count of Items in the database
            var currentCount = await _context.Items.CountAsync();

            // If there are 50 or more items, return a failure result
            if (currentCount >= 50)
            {
                return Result<Unit>.Failure("Cannot create item: the database already contains 50 or more items.");
            }
            _context.Items.Add(request.Item);
            var result = await _context.SaveChangesAsync() > 0;
            if (!result)
            {
                return Result<Unit>.Failure("Failed to create item");
            }

            return Result<Unit>.Success(Unit.Value);
        }
    }
}