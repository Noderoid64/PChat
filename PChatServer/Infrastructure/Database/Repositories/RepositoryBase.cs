using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Db.Entities;

namespace Infrastructure.Db.Repositories
{   
    public abstract class RepositoryBase<T> where T : BaseEntity {
        protected PChatDbContext context;

        public RepositoryBase (PChatDbContext context) {
            this.context = context;
        }

        public async Task<T> GetByIdAsync(int id) {
           return await this.context.Set<T>().Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<T>> GetCollectionAsync(Expression<Func<T, bool>> predicate, int take, int skip = 0) {
            IQueryable<T> entities = context.Set<T>();
            entities = entities.Where(predicate);
            if (skip != 0) {
                entities.Skip(skip);
            }
            if (take != 0) {
                entities.Take(take);
            }
            return await entities.ToListAsync();
        }

        public async Task AddAsync(T entity) {
            await context.Set<T>().AddAsync(entity);
        }

        public void Update(T entity)
        {
            context.Set<T>().Update(entity);
        }

        public void Delete(T entity)
        {
            context.Set<T>().Remove(entity);
        }

        public void Save() {
            context.SaveChanges();
        }
    }
}