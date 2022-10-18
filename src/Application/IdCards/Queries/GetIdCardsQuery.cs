using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.IdCards.Queries
{
    public class GetIdCardsQuery : IRequest<List<IdCard>> { }


    public class GetIdCardsHandler : IRequestHandler<GetIdCardsQuery, List<IdCard>>
    {
        private readonly IApplicationDbContext _context;
        public GetIdCardsHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<IdCard>> Handle(GetIdCardsQuery request, CancellationToken cancellationToken)
        {
            return await _context.IdCards.ToListAsync();
        }
    }
}