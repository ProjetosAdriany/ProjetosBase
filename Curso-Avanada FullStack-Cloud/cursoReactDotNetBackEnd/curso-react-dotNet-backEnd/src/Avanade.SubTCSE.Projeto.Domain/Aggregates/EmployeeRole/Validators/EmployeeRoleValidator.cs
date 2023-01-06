using FluentValidation;

namespace Avanade.SubTCSE.Projeto.Domain.Aggregates.EmployeeRole.Validators
{
    public class EmployeeRoleValidator : AbstractValidator<Entities.EmployeeRole>
    {
        public EmployeeRoleValidator()
        {
            //RuleFor(e => e.RoleName).NotEmpty();  Regra para uma propriedade

            RuleSet("new", () =>
            {
                RuleFor(e => e.RoleName)
                    .NotEmpty()
                    .WithMessage("{PropertyName} is required");
            });

            RuleSet("FindById", () => 
            {
                RuleFor(e => e.Id)
                .NotEmpty()
                .WithMessage("{PropertyName} is required");
            });

            RuleSet("NotFound", () =>
            {
                RuleFor(e => e.Id)
                .NotEmpty()
                .WithMessage("{PropertyName} Not Found");
            });
        }
    }
}
