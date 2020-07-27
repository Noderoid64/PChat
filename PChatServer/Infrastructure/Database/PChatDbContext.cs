using Microsoft.EntityFrameworkCore;
using Infrastructure.Db.Entities;
using System;

namespace Infrastructure.Db
{
    public class PChatDbContext : DbContext
    {
        public PChatDbContext (DbContextOptions<PChatDbContext> options) : base(options) {

        }

        public DbSet<Chat> Chats { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Profile> Profiles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Chat>().ToTable("chat");
            modelBuilder.Entity<Message>().ToTable("message");
            modelBuilder.Entity<Profile>().Property(prop => prop.Id).HasColumnName("id");
            modelBuilder.Entity<Profile>().Property(prop => prop.lastLogin).HasColumnName("last_login");
            modelBuilder.Entity<Profile>().ToTable("profile");
        }
    }
}