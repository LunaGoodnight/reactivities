
using Application.DTOs;
using AutoMapper;
using Domain;


namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Activity, Activity>();
            CreateMap<Link, Link>();
            CreateMap<CreateItemDto, Item>(); // Mapping for CreateItemDto to Item
            CreateMap<EditItemDto, Item>();   // Mapping for EditItemDto to Item
        }
    }
}