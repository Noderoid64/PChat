using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Infrastructure.Db.Entities;

namespace Infrastructure.Db.Repositories
{
    public class ChatRepository : RepositoryBase<ChatEntity> {

        public ChatRepository(PChatDbContext context) : base(context) {

        } 

        public async Task<ICollection<ChatEntity>> GetChatsByProfileIdAsync(int profileId) {
            return await this.context.Chats.Where(p => p.ProfileRelations.All(p => p.ProfileId == profileId)).ToListAsync();
        }
    }
}