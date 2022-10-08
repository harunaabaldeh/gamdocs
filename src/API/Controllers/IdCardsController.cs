using Application.Common.Interfaces;
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
        public async Task<ActionResult<List<IdCard>>> Index()
        {
            return await Mediator.Send(new GetIdCardsQuery());
        }


    }
}