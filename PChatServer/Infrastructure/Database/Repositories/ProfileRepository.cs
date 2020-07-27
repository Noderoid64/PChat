using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Infrastructure.Db.Entities;

namespace Infrastructure.Db.Repositories
{
    public class ProfileRepository : RepositoryBase<Profile> {

        public ProfileRepository(PChatDbContext context) : base(context) {

        }   

        public async Task<Profile> getProfileByNameAsync(String name) {
            return await this.context.Profiles.Where(c => c.name == name).FirstOrDefaultAsync();
        }
    }
}