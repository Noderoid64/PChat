using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Db.Entities
{
    public class BaseEntity
    {
        [Column("id")]
        public int Id { get; set; }
    }
}