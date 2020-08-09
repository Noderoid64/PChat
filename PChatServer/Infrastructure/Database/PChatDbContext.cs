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
        public DbSet<ProfileChatRelationEntity> ProfileChatRelations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ChatEntity>()
                .ToTable("chat");

            modelBuilder.Entity<ProfileChatRelationEntity>()
                .HasKey(p => new {p.ChatId, p.ProfileId});

            modelBuilder.Entity<ProfileChatRelationEntity>()
                .HasOne(p => p.Chat)
                .WithMany(p => p.ProfileRelations)
                .HasForeignKey(p => p.ChatId);
                
            modelBuilder.Entity<ProfileChatRelationEntity>()
                .HasOne(p => p.Profile)
                .WithMany(p => p.ChatRelations)
                .HasForeignKey(p => p.ProfileId);

            modelBuilder.Entity<MessageEntity>()
                .ToTable("message")
                .HasOne(p => p.Chat)
                .WithMany(p => p.Messages);
        }
    }
}