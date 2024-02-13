using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Manga;

public class List
{
    public class Query : IRequest<Result<List<Link>>> { }
    public class Handler : IRequestHandler<Query, Result<List<Link>>>
    {
        private readonly DataContext _context;

        public Handler(DataContext context)
        {
            _context = context;
        }
        public async Task<Result<List<Link>>> Handle(Query request, CancellationToken cancellationToken)
        {
            
            return Result<List<Link>>.Success(await _context.MangaLinks.ToListAsync());
        }
    }
}