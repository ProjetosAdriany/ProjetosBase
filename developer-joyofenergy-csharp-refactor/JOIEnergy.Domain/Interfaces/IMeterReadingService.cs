using JOIEnergy.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace JOIEnergy.Domain.Interfaces
{
    public interface IMeterReadingService
    {
        List<ElectricityReading> GetReadings(string smartMeterId);
        void StoreReadings(string smartMeterId, List<ElectricityReading> electricityReadings);
    }
}
