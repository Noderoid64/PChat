using Microsoft.EntityFrameworkCore;
using Infrastructure.Db.Entities;
using System;

namespace Infrastructure.Db
{
    public class PChatDbContext : DbContext
    {
        public PChatDbContext(DbContextOptions<PChatDbContext> options) : base(options)
        {

        }

        public DbSet<ChatEntity> Chats { get; set; }
        public DbSet<MessageEntity> Messages { get; set; }
        public DbSet<ProfileEntity> Profiles { get; set; }
        public DbSet<ProfileRelationEntity> ProfileRelations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ChatEntity>()
                .ToTable("chat");

            modelBuilder.Entity<MessageEntity>()
                .ToTable("message")
                .HasOne(p => p.Chat)
                .WithMany(p => p.Messages);

            modelBuilder.Entity<ProfileRelationEntity>()
                .ToTable("profile_profile")
                .HasKey(e => new {e.FromId, e.ToId });
            modelBuilder.Entity<ProfileRelationEntity>()
                .HasOne(e => e.ProfileFrom)
                .WithMany(e => e.FriendRelations)
                .HasForeignKey(e => e.FromId);
        }
    }
}