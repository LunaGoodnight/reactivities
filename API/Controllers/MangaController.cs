using Application.Manga;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class MangaController : BaseApiController
{

    [HttpGet]
    public async Task<IActionResult> GetMangaList()
    {
        return HandleResult(await Mediator.Send(new List.Query()));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> EditManga(Guid id,Link link)
    {
        link.Id = id;
        return HandleResult(await Mediator.Send(new Edit.Command { Link = link }));
    }


    [HttpPost]
    public async Task<IActionResult> CreatManga(Link link)
    {
        return HandleResult(await Mediator.Send(new Create.Command { Link = link }));
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteManga(Guid id)
    {
        return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
    }

}