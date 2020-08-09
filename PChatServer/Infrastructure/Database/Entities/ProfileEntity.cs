using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Db.Entities
{
    [Table("profile")]
    public class ProfileEntity : BaseEntity
    {
        [Column("name")]
        public String Name { get; set; }
        [Column("password")]
        public String? Password { get; set; }
        [Column("last_login")]
        public DateTime LastLogin { get; set; }
        [Column("google_id")]
        public String GoogleId { get; set; }

        public ICollection<ProfileChatRelationEntity> ChatRelations { get; set;}
    }
}