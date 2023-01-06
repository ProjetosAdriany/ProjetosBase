using System.Collections.Generic;
using System.Threading.Tasks;

namespace Avanade.SubTCSE.Projeto.Domain.Aggregates.EmployeeRole.Interfaces.Services
{
    public interface IEmployeeRoleService
    {
        Task<Entities.EmployeeRole> AddEmployeeRoleAsync(Entities.EmployeeRole employeeRole);

        Task<List<Entities.EmployeeRole>> FindAllAsync();

        Task<Entities.EmployeeRole> FindByIdAsync(string id);

        Task<Entities.EmployeeRole> DeleteByIdAsync(string id);
    }
}
