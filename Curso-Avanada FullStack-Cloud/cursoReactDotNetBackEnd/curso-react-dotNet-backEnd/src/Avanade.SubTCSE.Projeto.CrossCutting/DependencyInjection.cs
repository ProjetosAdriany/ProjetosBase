using Avanade.SubTCSE.Projeto.Application.Interfaces.EmployeeRole;
using Avanade.SubTCSE.Projeto.Application.Services.EmployeeRole;
using Avanade.SubTCSE.Projeto.Data.Repositories.Base.MongoDB;
using Avanade.SubTCSE.Projeto.Data.Repositories.EmployeeRole;
using Avanade.SubTCSE.Projeto.Domain.Aggregates.EmployeeRole.Entities;
using Avanade.SubTCSE.Projeto.Domain.Aggregates.EmployeeRole.Interfaces.Repository;
using Avanade.SubTCSE.Projeto.Domain.Aggregates.EmployeeRole.Interfaces.Services;
using Avanade.SubTCSE.Projeto.Domain.Aggregates.EmployeeRole.Services;
using Avanade.SubTCSE.Projeto.Domain.Aggregates.EmployeeRole.Validators;
using Avanade.SubTCSE.Projeto.Domain.Base.Repository.MongoDB;
using FluentValidation;
using Microsoft.Extensions.DependencyInjection;


namespace Avanade.SubTCSE.Projeto.CrossCutting
{
    public static class DependencyInjection
    {
        public static void AddRegisterDependenciesInjections(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddAutoMapper(typeof(Application.AutoMapperConfigs.Profiles.Configs));
            serviceCollection.AddSingleton<IMongoDBContext, MongoDBContext>();
            serviceCollection.AddScoped<IEmployeeRoleAppService, EmployeeRoleAppService>();
            serviceCollection.AddScoped<IEmployeeRoleService, EmployeeRoleService>();
            serviceCollection.AddScoped<IEmployeeRoleRepository, EmployeeRoleRepository>();
            serviceCollection.AddTransient<IValidator<EmployeeRole>, EmployeeRoleValidator>();
        }
    }
}
