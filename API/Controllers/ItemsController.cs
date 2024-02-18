using Application.Items;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ItemsController : BaseApiController
{
    [HttpGet]
    public async Task<IActionResult> GetActivities()
    {
        return HandleResult(await Mediator.Send(new List.Query()));
    }
}