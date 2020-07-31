using System;
using Infrastructure.Db.Entities;
using Infrastructure.Dto;

namespace Infrastructure {
    public class GoogleProfileDtoAssembler {
        public ProfileEntity AssemblerProfileEntity (GoogleProfileDto dto) {
            if (dto.id == null) {
                throw new Exception("google dto is null");
            }
            ProfileEntity result = new ProfileEntity();
            result.GoogleId = dto.id;
            result.Name = dto.FirstName;
            return result;
        }
    }
}