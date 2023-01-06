using Avanade.SubTCSE.Projeto.Domain.Aggregates;
using Avanade.SubTCSE.Projeto.Domain.Base.Repository;
using Avanade.SubTCSE.Projeto.Domain.Base.Repository.MongoDB;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Avanade.SubTCSE.Projeto.Data.Repositories.Base
{
    public abstract class BaseRepository<TEntity, Tid>
        : IBaseRepository<TEntity, Tid> where TEntity : BaseEntity<Tid>
    {
        private readonly IMongoCollection<TEntity> _collection;

        protected BaseRepository(IMongoDBContext mongoDBContext, string collectionName)
        {
            _collection = mongoDBContext.GetCollection<TEntity>(collectionName);
        }

        public virtual async Task<TEntity> AddAsync(TEntity entity)
        {
            await _collection.InsertOneAsync(entity);
            return entity;
        }

        public async Task<List<TEntity>> FindAllAsync()
        {
            var all = await _collection.FindAsync(new BsonDocument());

            return await all.ToListAsync();
        }

        public async Task<TEntity> FindByIdAsync(Tid id)
        {
            var filter = Builders<TEntity>.Filter.Eq("_id", id);
            var item = await _collection.FindAsync(filter);
            return item.FirstOrDefault();
        }

        public async Task<TEntity> DeleteByIdAsync(Tid id)
        {
            var filter = Builders<TEntity>.Filter.Eq("_id", id);
            var item = await _collection.FindAsync(filter);
            await _collection.DeleteOneAsync(filter);
            return item.FirstOrDefault();
        }

        public async Task<TEntity> UpdateAsync(TEntity entity)
        {
            var filter = Builders<TEntity>.Filter.Eq("_id", entity.Id);
            var item = await _collection.FindAsync(filter);

            if(item != null)
            {
                var update = item.FirstOrDefault();
                _collection.ReplaceOne(filter, update);
                return update;
            }
            return entity;
        }
    }
}

