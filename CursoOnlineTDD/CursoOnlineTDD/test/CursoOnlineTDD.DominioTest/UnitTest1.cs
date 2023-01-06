using System;
using Xunit;

namespace CursoOnlineTDD.DominioTest
{
    public class UnitTest1
    {
        [Fact(DisplayName ="Testar2")]
        public void DeveVariavel1SerIgualVariavel2()
        {
            // Arrange
            int valor1 = 1;
            int valor2 = 2;

            // Action
            valor2 += 1;

            // Assert
            Assert.Equal(valor1, valor2);
        }
    }
}
