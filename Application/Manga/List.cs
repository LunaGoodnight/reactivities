using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Manga;

public class List
{
    public class Query : IRequest<List<Link>> { }
    public class Handler : IRequestHandler<Query, List<Link>>
    {
        private readonly DataContext _context;

        public Handler(DataContext context)
        {
            _context = context;
        }
        public async Task<List<Link>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await _context.MangaLinks.ToListAsync();
        }
    }
}