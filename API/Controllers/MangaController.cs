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



}