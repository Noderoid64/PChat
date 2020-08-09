using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Db.Entities
{
    public class ChatEntity : BaseEntity
    {
        [Column("name")]
        public String Name { get; set; }

        public ICollection<MessageEntity> Messages { get; set; }
        public ICollection<ProfileChatRelationEntity> ProfileRelations { get; set; }
    }
}