using System;
using System.Collections.Generic;
using System.Text;

namespace JOIEnergy.Domain.Interfaces
{
    public interface IPricePlanService
    {
        Dictionary<string, decimal> GetConsumptionCostOfElectricityReadingsForEachPricePlan(string smartMeterId);
    }
}
