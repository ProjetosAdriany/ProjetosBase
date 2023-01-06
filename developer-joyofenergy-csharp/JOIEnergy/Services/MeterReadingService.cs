using System;
using System.Collections.Generic;
using JOIEnergy.Domain;
using JOIEnergy.Enums;

namespace JOIEnergy.Services
{
    public class MeterReadingService : IMeterReadingService
    {
        public Dictionary<string, List<ElectricityReading>> MeterAssociatedReadings { get; set; }
        private readonly IAccountService _acconuntService;

        public MeterReadingService(Dictionary<string, List<ElectricityReading>> meterAssociatedReadings, IAccountService acconuntService)
        {
            MeterAssociatedReadings = meterAssociatedReadings;
            _acconuntService = acconuntService;
        }

        public List<ElectricityReading> GetReadings(string smartMeterId) {
            if (MeterAssociatedReadings.ContainsKey(smartMeterId)) {
                return MeterAssociatedReadings[smartMeterId];
            }
            return new List<ElectricityReading>();
        }

        public void StoreReadings(string smartMeterId, List<ElectricityReading> electricityReadings) {
            if (!MeterAssociatedReadings.ContainsKey(smartMeterId)) {
                MeterAssociatedReadings.Add(smartMeterId, new List<ElectricityReading>());
            }

            electricityReadings.ForEach(electricityReading => MeterAssociatedReadings[smartMeterId].Add(electricityReading));
        }

        public List<ElectricityReading> GetReadingsLastWeek(string smartMeterId)
        {
            Enum pricePlan = _acconuntService.GetPricePlanIdForSmartMeterId(smartMeterId);
            if(pricePlan.Equals(Supplier.NullSupplier))
            {
                throw new ArgumentException("Não existe nenhum plano vinculado a esse usuário");
            }
            return new List<ElectricityReading>();
        }
    }
}
