using System;
using System.Collections.Generic;

namespace Infrastructure.Db.Entities
{
    public class ProfileRelationEntity : BaseEntity
    {
        public int FromId { get; set; }
        public int ToId { get; set; }

        public virtual ProfileEntity ProfileFrom { get; set; }
        public virtual ProfileEntity ProfileTo { get; set; }
    }
}