using Application.Core;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Items;

public class Edit
{
    public class Command : IRequest<Result<Unit>>
    {
        public Item Item { get; set; }
    }

    public class Handler : IRequestHandler<Command, Result<Unit>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var item = await _context.Items.FindAsync(request.Item.Id);
            if (item == null) return null;
            _mapper.Map(request.Item, item);
            var result = await _context.SaveChangesAsync() > 0;
            if (!result) return Result<Unit>.Failure("Failed to update item");
            return Result<Unit>.Success(Unit.Value);
        }
    }
}