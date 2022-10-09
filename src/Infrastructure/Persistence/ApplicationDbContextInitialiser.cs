using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Persistence
{
    public class ApplicationDbContextInitialiser
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<ApplicationDbContextInitialiser> _logger;

        public ApplicationDbContextInitialiser(ILogger<ApplicationDbContextInitialiser> logger, ApplicationDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public async Task InitialiseAsync()
        {
            try
            {
                if (_context.Database.IsSqlite())
                {
                    await _context.Database.MigrateAsync();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occire while trying to initialising the database");
                throw;
            }
        }

        public async Task SeedAsync()
        {
            try
            {
                await TrySeedAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occure while tyring to seed the database");
                throw;
            }
        }

        public async Task TrySeedAsync()
        {
            if (!_context.IdCards.Any())
            {
                var idCards = new List<IdCard>{
                    new IdCard {
                        FirstName = "Haruna A",
                        LastName = "Baldeh",
                        DateOfBirth = DateTime.Now,
                        DateIssued = DateTime.Now,
                        DateOfExpiry = DateTime.Now,
                        DocumentNumber = "1997-14-07-004",
                        Sex = Domain.Enums.Sex.Female,
                        Height = 5.6,
                        IDNumber = 1234567,
                        Nationality = "Gambian",
                        PlaceOfBirth = "Nafugan",
                        PermanentAddress = "Sinchu Alagi",
                        Occupation = "SE"

                    },
                      new IdCard {
                        FirstName = "Ahmed Eyan",
                        LastName = "Jeng",
                        DateOfBirth = DateTime.Now,
                        DateIssued = DateTime.Now,
                        DateOfExpiry = DateTime.Now,
                        DocumentNumber = "1222377664",
                        Sex = Domain.Enums.Sex.Female,
                        Height = 5.5,
                        IDNumber = 12849302,
                        Nationality = "Gambian",
                        PlaceOfBirth = "Barra",
                        PermanentAddress = "Jewsuwang",
                        Occupation = "SE"

                    },
                        new IdCard {
                        FirstName = "Sulayman",
                        LastName = "Mbye",
                        DateOfBirth = DateTime.Now,
                        DateIssued = DateTime.Now,
                        DateOfExpiry = DateTime.Now,
                        DocumentNumber = "1222377664",
                        Sex = Domain.Enums.Sex.Female,
                        Height = 5.5,
                        IDNumber = 12849302,
                        Nationality = "Gambian",
                        PlaceOfBirth = "Sare Bojo",
                        PermanentAddress = "Sinchu Alagi",
                        Occupation = "Accountant"

                    },
                        new IdCard {
                        FirstName = "Awa",
                        LastName = "Krubally",
                        DateOfBirth = DateTime.Now,
                        DateIssued = DateTime.Now,
                        DateOfExpiry = DateTime.Now,
                        DocumentNumber = "1222377664",
                        Sex = Domain.Enums.Sex.Female,
                        Height = 5.5,
                        IDNumber = 12849302,
                        Nationality = "Gambian",
                        PlaceOfBirth = "Faji Kunda",
                        PermanentAddress = "Sinchu Alagi",
                        Occupation = "Doctor"

                    },
                        new IdCard {
                        FirstName = "Ensa",
                        LastName = "Wally",
                        DateOfBirth = DateTime.Now,
                        DateIssued = DateTime.Now,
                        DateOfExpiry = DateTime.Now,
                        DocumentNumber = "1222377664",
                        Sex = Domain.Enums.Sex.Female,
                        Height = 5.5,
                        IDNumber = 12849302,
                        Nationality = "Gambian",
                        PlaceOfBirth = "Sanyang Village",
                        PermanentAddress = "Sinchu Alagi",
                        Occupation = "Procurement Officer"

                    },
                };

                await _context.IdCards.AddRangeAsync(idCards);
                await _context.SaveChangesAsync();
            }
        }
        
    }
}