using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.IdCards.Queries
{
    public class GetIdCardByIdQuery : IRequest<IdCard>
    {
        public Guid Id { get; set; }
    }


    public class GetIdCardByIdQueryHandler : IRequestHandler<GetIdCardByIdQuery, IdCard>
    {
        private readonly IApplicationDbContext _context;

        public GetIdCardByIdQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IdCard> Handle(GetIdCardByIdQuery request, CancellationToken cancellationToken)
        {
            return await _context.IdCards.FindAsync(request.Id);
        }
    }
}