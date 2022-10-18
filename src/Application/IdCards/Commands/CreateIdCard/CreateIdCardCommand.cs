using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.IdCards.Commands.CreateIdCard
{
    public class CreateIdCardCommand : IRequest
    {
        public IdCard IdCard { get; set; }
    }

    public class CreateIdCardCommandHandler : IRequestHandler<CreateIdCardCommand>
    {
        private readonly IApplicationDbContext _context;

        public CreateIdCardCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(CreateIdCardCommand request, CancellationToken cancellationToken)
        {
            await _context.IdCards.AddAsync(request.IdCard);

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}