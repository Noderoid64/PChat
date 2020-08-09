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
    [Route("profiles/{id}/chats")]
    public class ChatController : ControllerBase
    {
        private readonly ILogger<ProfileController> _logger;
        private readonly ChatRepository chatRepository;

        public ChatController(ILogger<ProfileController> logger, ChatRepository chatRepository)
        {
            _logger = logger;
            this.chatRepository = chatRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<ChatEntity>> GetAllChatsAsync(int id) {
            return await this.chatRepository.GetChatsByProfileIdAsync(id);
        }

        [HttpGet]
        [Route("create")]
        public async Task<ChatEntity> CreateChatAsync(string ids, string name) {
            ChatEntity chat = new ChatEntity();
            chat.Name = name;
            await this.chatRepository.AddAsync(chat);
            int [] profileIds = ids.Split(',').Select(x => int.Parse(x)).ToArray();
            chat.ProfileRelations = new List<ProfileChatRelationEntity>();
            foreach(int id in profileIds) {
                ProfileChatRelationEntity profileRelation = new ProfileChatRelationEntity();
                profileRelation.ProfileId = id;
                profileRelation.ChatId = chat.Id;
                chat.ProfileRelations.Add(profileRelation);
            }
            this.chatRepository.Save();
            return chat;
        }

        
    }
}
