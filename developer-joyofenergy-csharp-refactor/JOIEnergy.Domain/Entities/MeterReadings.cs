using System;
using System.Collections.Generic;
using System.Text;

namespace JOIEnergy.Domain.Entities
{
    public class MeterReadings
    {
        public string SmartMeterId { get; set; }
        public List<ElectricityReading> ElectricityReadings { get; set; }
    }
}
