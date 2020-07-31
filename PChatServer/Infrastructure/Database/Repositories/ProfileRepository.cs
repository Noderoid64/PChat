using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Infrastructure.Db.Entities;

namespace Infrastructure.Db.Repositories
{
    public class ProfileRepository : RepositoryBase<ProfileEntity> {

        public ProfileRepository(PChatDbContext context) : base(context) {

        } 

        public async Task<IEnumerable<ProfileEntity>> getProfilesByNameAsync(String name) {
            return await this.context.Profiles.Where(c => c.Name.ToUpper().Contains(name.ToUpper())).Take(10).ToListAsync();
        }

        public ProfileEntity getProfileByGoogleId(String googleId) {
            return this.context.Profiles.FirstOrDefault(c => c.GoogleId == googleId);
        }
    }
}