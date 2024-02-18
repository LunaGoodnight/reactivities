using Application.Items;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ItemsController : BaseApiController
{
    [HttpGet]
    public async Task<IActionResult> GetItems()
    {
        return HandleResult(await Mediator.Send(new List.Query()));
    }
    
    
    [HttpPost]
    public async Task<IActionResult> CreateItem(Item item)
    {
        return HandleResult(await Mediator.Send(new Create.Command { Item = item }));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> EditItem(Guid id,Item item)
    {
        item.Id = id;
        return HandleResult(await Mediator.Send(new Edit.Command { Item = item }));
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteItem(Guid id)
    {
        return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
    }
}