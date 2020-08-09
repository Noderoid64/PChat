using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Db.Entities
{
    [Table("profile_chat")]
    public class ProfileChatRelationEntity
    {
        [Column("profile_id")]
        public int ProfileId { get; set; }
        [Column("chat_id")]
        public int ChatId { get; set; }

        public virtual ProfileEntity Profile { get; set; }
        public virtual ChatEntity Chat { get; set; }
    }
}