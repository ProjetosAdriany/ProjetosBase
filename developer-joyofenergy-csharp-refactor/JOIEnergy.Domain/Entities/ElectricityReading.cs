using System;
using System.Collections.Generic;
using System.Text;

namespace JOIEnergy.Domain.Entities
{
    public class ElectricityReading
    {
        public DateTime Time { get; set; }
        public Decimal Reading { get; set; }
    }
}
