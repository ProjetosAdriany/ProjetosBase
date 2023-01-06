using JOIEnergy.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace JOIEnergy.Domain.Interfaces
{
    public interface IAccountService
    {
        Supplier GetPricePlanIdForSmartMeterId(string smartMeterId);
    }
}
