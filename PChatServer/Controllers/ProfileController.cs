using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Infrastructure.Db;
using Infrastructure.Db.Entities;
using Infrastructure.Db.Repositories;
using Infrastructure.Dto;
using Infrastructure;

namespace PChatServer.Controllers
{
    [ApiController]
    [Route("profiles")]
    public class ProfileController : ControllerBase
    {
        private readonly ILogger<ProfileController> _logger;
        private readonly ProfileRepository _profileRepository;
        private readonly GoogleProfileDtoAssembler googleAssembler;

        public ProfileController(ILogger<ProfileController> logger, ProfileRepository profileRepository, GoogleProfileDtoAssembler googleAssembler)
        {
            _logger = logger;
            _profileRepository = profileRepository;
            this.googleAssembler = googleAssembler;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ProfileEntity> GetAsync(int id)
        {
            _logger.LogInformation("get: profiles/" + id);
            return await _profileRepository.GetByIdAsync(id);
        }

        [HttpGet]
        public async Task<IEnumerable<ProfileEntity>> GetAsync(String name)
        {
            _logger.LogInformation("get: profiles?name=" + name);
            IEnumerable<ProfileEntity> result = await _profileRepository.getProfilesByNameAsync(name);
            return result ?? Enumerable.Empty<ProfileEntity>();
        }

        [HttpGet]
        [Route("google")]
        public ProfileEntity GetProfileByGoogleId(String id) {
            _logger.LogInformation("get: profiles/google?id=" + id);
            return this._profileRepository.getProfileByGoogleId(id);
        }

        [HttpPut]
        [Route("google")]
        public async Task<ProfileEntity> SetProfileByGoogleIdAsync([FromBody] GoogleProfileDto googleProfile) {
            _logger.LogInformation("put: profiles/google");
            ProfileEntity profile = this.googleAssembler.AssemblerProfileEntity(googleProfile);
            await this._profileRepository.AddAsync(profile);
            this._profileRepository.Save();
            return this._profileRepository.getProfileByGoogleId(googleProfile.id);
        }
    }
}
