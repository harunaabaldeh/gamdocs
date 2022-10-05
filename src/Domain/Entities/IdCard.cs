using Domain.Commons;
using Domain.Enums;

namespace Domain.Entities
{
    public class IdCard : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime DateIssued { get; set; }
        public DateTime DateOfExpiry { get; set; }
        public string DocumentNumber { get; set; }
        public Sex Sex { get; set; }
        public double Height { get; set; }
        public int IDNumber { get; set; }
        public string Nationality { get; set; }
        public string PlaceOfBirth { get; set; }
        public string PermanentAddress { get; set; }
        public string Occupation { get; set; }
        public string Image { get; set; }
    }
}