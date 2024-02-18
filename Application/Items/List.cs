using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Items;

public class List
{
    public class Query : IRequest<Result<List<Item>>> { }
    public class Handler : IRequestHandler<Query, Result<List<Item>>>
    {
        private readonly DataContext _context;

        public Handler(DataContext context)
        {
            _context = context;
        }
        public async Task<Result<List<Item>>> Handle(Query request, CancellationToken cancellationToken)
        {
            
            return Result<List<Item>>.Success(await _context.Items.ToListAsync());
        }
    }
}