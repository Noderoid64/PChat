using System;
using System.Collections.Generic;

namespace Infrastructure.Db.Entities
{
    public class ChatEntity
    {
        public int Id { get; set; }
        public String Name { get; set; }

        public ICollection<MessageEntity> Messages { get; set; }
    }
}