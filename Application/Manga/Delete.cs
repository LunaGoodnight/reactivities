using Application.Core;
using MediatR;
using Persistence;

namespace Application.Manga;

public class Delete
{
    public class Command : IRequest<Result<Unit>>
    {
        public Guid Id { get; set; }
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
            var manga = await _context.MangaLinks.FindAsync(request.Id);
            if (manga == null) return null;
            _context.Remove(manga);
            var result = await _context.SaveChangesAsync() > 0;
            if (!result) return Result<Unit>.Failure("Failed to delete the Manga");
            return Result<Unit>.Success(Unit.Value);
        }
    }
}