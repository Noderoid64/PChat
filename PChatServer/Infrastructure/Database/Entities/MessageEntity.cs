using System;

namespace Infrastructure.Db.Entities
{
    public class MessageEntity
    {
        public int Id { get; set; }
        public String Text { get; set; }

        public int ChatId { get; set; }
        public ChatEntity Chat { get; set; }
    }
}