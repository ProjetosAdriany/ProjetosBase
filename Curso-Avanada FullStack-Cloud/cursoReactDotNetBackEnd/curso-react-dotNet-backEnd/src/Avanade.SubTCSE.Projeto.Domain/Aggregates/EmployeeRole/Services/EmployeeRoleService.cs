using Avanade.SubTCSE.Projeto.Domain.Aggregates.EmployeeRole.Interfaces.Repository;
using Avanade.SubTCSE.Projeto.Domain.Aggregates.EmployeeRole.Interfaces.Services;
using FluentValidation;
using FluentValidation.Results;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Avanade.SubTCSE.Projeto.Domain.Aggregates.EmployeeRole.Services
{
    public class EmployeeRoleService : IEmployeeRoleService
    {
        private readonly IValidator<Entities.EmployeeRole> _validator;
        private readonly IEmployeeRoleRepository _employeeRoleRepository;

        public EmployeeRoleService(
            IValidator<Entities.EmployeeRole> validator,
            IEmployeeRoleRepository employeeRoleRepository)
        {
            _validator = validator;
            _employeeRoleRepository = employeeRoleRepository;
        }

        public async Task<Entities.EmployeeRole> AddEmployeeRoleAsync(Entities.EmployeeRole employeeRole)
        {
            ValidationResult validator = await _validator.ValidateAsync(employeeRole, opt =>
            {
                opt.IncludeRuleSets("new");
            });

            employeeRole.ValidationResult = validator;
            if (!employeeRole.ValidationResult.IsValid)
                return employeeRole;

            await _employeeRoleRepository.AddAsync(employeeRole);

            return employeeRole;

        }

        public async Task<Entities.EmployeeRole> DeleteByIdAsync(string id)
        {
            var item = await _employeeRoleRepository.FindByIdAsync(id);
            ValidationResult validator = await _validator.ValidateAsync(item, opt =>
            {
                opt.IncludeRuleSets("NotFound");
            });
            item.ValidationResult = validator;

            if (!item.ValidationResult.IsValid)
                return item;    
            return await _employeeRoleRepository.DeleteByIdAsync(id);
        }

        public async Task<List<Entities.EmployeeRole>> FindAllAsync()
        {
            return await _employeeRoleRepository.FindAllAsync();
        }

        public async Task<Entities.EmployeeRole> FindByIdAsync(string id)
        {   
            return await _employeeRoleRepository.FindByIdAsync(id);
        }
    }
}
