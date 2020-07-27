using System;

namespace Infrastructure.Db.Entities
{
    public class Profile : BaseEntity
    {
        public String? name { get; set; }
        public String? password { get; set; }
        public DateTime? lastLogin { get; set; }
    }
}