using Domain;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace API.Services;

public class TokenService
{
    public string CreateToken(AppUser user)
    {
        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, user.UserName),
            new Claim(ClaimTypes.NameIdentifier, user.Id),
            new Claim(ClaimTypes.Email, user.Email),
        };
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("super secret key"));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
        
        return String.Empty;
    }
}