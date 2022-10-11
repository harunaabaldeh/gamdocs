using Application.Common.Interfaces;
using Application.IdCards.Commands.CreateIdCard;
using Application.IdCards.Queries;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class IdCardsController : BaseApiController
    {
        private readonly IApplicationDbContext _context;

        public IdCardsController(IApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<IdCard>>> GetIdCards()
        {
            return await Mediator.Send(new GetIdCardsQuery());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IdCard>> GetIdCardById(Guid id)
        {
            return await Mediator.Send(new GetIdCardByIdQuery { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateIdCard(IdCard idCard)
        {
            return Ok(await Mediator.Send(new CreateIdCardCommand { IdCard = idCard }));
        }

    }
}