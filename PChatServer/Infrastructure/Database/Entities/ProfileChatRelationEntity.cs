using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Db.Entities
{
    [Table("profile")]
    public class ProfileChatRelationEntity : BaseEntity
    {
        public int ProfileId { get; set; }
        public int ChatId { get; set; }

        public virtual ProfileEntity Profile { get; set; }
        public virtual ChatEntity Chat { get; set; }
    }
}