using AutoMapper;
using Avanade.SubTCSE.Projeto.Application.Dtos.EmployeeRole;
using Avanade.SubTCSE.Projeto.Application.Interfaces.EmployeeRole;
using Avanade.SubTCSE.Projeto.Domain.Aggregates.EmployeeRole.Interfaces.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Avanade.SubTCSE.Projeto.Application.Services.EmployeeRole
{
    public class EmployeeRoleAppService : IEmployeeRoleAppService
    {
        private readonly IMapper _mapper;
        private readonly IEmployeeRoleService _employeeRoleService;

        public EmployeeRoleAppService(IMapper mapper, IEmployeeRoleService employeeRoleService)
        {
            _mapper = mapper;
            _employeeRoleService = employeeRoleService;
        }

        public async Task<EmployeeRoleDto> AddEmployeeRoleAsync(EmployeeRoleDto employeeRoleDto)
        {
            var itemDomain = _mapper.Map<EmployeeRoleDto, Domain.Aggregates.EmployeeRole.Entities.EmployeeRole>(employeeRoleDto);
            var item = await _employeeRoleService.AddEmployeeRoleAsync(itemDomain);
            var itemDto = _mapper.Map<Domain.Aggregates.EmployeeRole.Entities.EmployeeRole, EmployeeRoleDto>(item);
            return itemDto; 
        }

        public async Task<EmployeeRoleDto> DeleteByIdEmployeeRoleAsync(string id)
        {
            var item = await _employeeRoleService.DeleteByIdAsync(id);
            return _mapper.Map<Domain.Aggregates.EmployeeRole.Entities.EmployeeRole, EmployeeRoleDto>(item);

        }

        public async Task<List<EmployeeRoleDto>> FindAllEmployeeRoleAsync()
        {
            var item = await _employeeRoleService.FindAllAsync();
            return _mapper.Map<List<Domain.Aggregates.EmployeeRole.Entities.EmployeeRole>, List<EmployeeRoleDto>>(item);
        }

        public async Task<EmployeeRoleDto> FindByIdEmployeeRoleAsync(string id)
        {
            var item = await _employeeRoleService.FindByIdAsync(id);
            return _mapper.Map<Domain.Aggregates.EmployeeRole.Entities.EmployeeRole, EmployeeRoleDto>(item);
        }
    }
}
