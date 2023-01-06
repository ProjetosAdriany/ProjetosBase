using Avanade.SubTCSE.Projeto.Domain.Aggregates.EmployeeRole.Validators;
using FluentValidation;

namespace Avanade.SubTCSE.Projeto.Domain.Aggregates.Employee.Validators
{
    public class EmployeeValidator : AbstractValidator<Entities.Employee>
    {
        public EmployeeValidator()
        {
            // Coleção de regras
            RuleSet("new", () =>
            {
                RuleFor(e => e.FirstName)
                .NotEmpty()
                .WithMessage("{PropertyName} is required");

                RuleFor(e => e.SurName)
                .NotEmpty()
                .WithMessage("{PropertyName} is required");

                RuleFor(e => e.EmployeeRole)
                .SetValidator(new EmployeeRoleValidator());
            });
        }
    }
}
