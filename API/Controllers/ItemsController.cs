using Application.Items;
using Application.DTOs;
using Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Threading.Tasks;
using AutoMapper;
using Persistence;

namespace API.Controllers
{
    public class ItemsController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public ItemsController(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetItems()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpPost]
        public async Task<IActionResult> CreateItem([FromForm] CreateItemDto createItemDto)
        {
            var item = _mapper.Map<Item>(createItemDto);
            item.Id = Guid.NewGuid();
            if (createItemDto.Image != null && createItemDto.Image.Length > 0)
            {
                item.ImageUrl = await SaveImageAsync(createItemDto.Image);
            }

            var command = new Create.Command { Item = item };
            return HandleResult(await Mediator.Send(command));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditItem(Guid id, [FromForm] EditItemDto editItemDto)
        {
            var item = await _context.Items.FindAsync(id);
            if (item == null) return NotFound();

            _mapper.Map(editItemDto, item);
            if (editItemDto.Image != null && editItemDto.Image.Length > 0)
            {
                var imageUrl = await SaveImageAsync(editItemDto.Image);
                item.ImageUrl = imageUrl;
            }

            var command = new Edit.Command { Item = item };
            return HandleResult(await Mediator.Send(command));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }

        private async Task<string> SaveImageAsync(IFormFile image)
        {
            var uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/images/items");
            if (!Directory.Exists(uploadPath))
            {
                Directory.CreateDirectory(uploadPath);
            }

            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(image.FileName);
            var filePath = Path.Combine(uploadPath, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await image.CopyToAsync(stream);
            }

            return $"/images/items/{fileName}";
        }
    }
}
