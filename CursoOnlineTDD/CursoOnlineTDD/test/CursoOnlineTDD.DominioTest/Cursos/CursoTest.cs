using ExpectedObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace CursoOnlineTDD.DominioTest.Cursos
{
    public class CursoTest
    {
        [Fact]
        public void DeveCriarCurso()
        {
            // Arrange
            var cursoEsperado = new
            {
                Nome = "Informatica",
                CargaHoraria = (int)1,
                PublicoAlvo = PublicoAlvo.Estudante,
                Valor = (double)950
            };

            //Action
            var curso = new Curso(cursoEsperado.Nome, cursoEsperado.CargaHoraria, cursoEsperado.PublicoAlvo, cursoEsperado.Valor);

            // Assert
            cursoEsperado.ToExpectedObject().ShouldMatch(curso);

        }

        [Theory]
        [InlineData("")]
        [InlineData(null)]
        public void NaoDeveCursoTerUmNomeInvalido(string nomeInvalido)
        {
            var cursoEsperado = new
            {
                Nome = string.Empty,
                CargaHoraria = (int)80,
                PublicoAlvo = PublicoAlvo.Estudante,
                Valor = (double)950
            };

            var message = Assert.Throws<ArgumentException>(() => 
                new Curso(nomeInvalido, cursoEsperado.CargaHoraria, cursoEsperado.PublicoAlvo, cursoEsperado.Valor))
                .Message;

            Assert.Equal("Nome Inválido", message);
        }

        [Theory]
        [InlineData(0)]
        [InlineData(-2)]
        [InlineData(-100)]
        public void NaoDeveCursoTerCargaHorariaMenorQueUm(int cargaHorariaInvalida)
        {
            var cursoEsperado = new
            {
                Nome = "Informatica",
                CargaHoraria = (int)80,
                PublicoAlvo = PublicoAlvo.Estudante,
                Valor = (double)950
            };

            var message = Assert.Throws<ArgumentException>(() => 
                new Curso(cursoEsperado.Nome, cargaHorariaInvalida, cursoEsperado.PublicoAlvo, cursoEsperado.Valor))
                .Message;

            Assert.Equal("Carga Horária Inválida", message);
        }


        [Theory]
        [InlineData(-1)]
        [InlineData(-30)]
        public void NaoDeveCursoTerValorMenorQueZero(double valorInvalido)
        {
            var cursoEsperado = new
            {
                Nome = "Informatica",
                CargaHoraria = (int)80,
                PublicoAlvo = PublicoAlvo.Estudante,
                Valor = (double)950
            };

            var message = Assert.Throws<ArgumentException>(() => 
                new Curso(cursoEsperado.Nome, cursoEsperado.CargaHoraria, cursoEsperado.PublicoAlvo, valorInvalido))
                .Message;

            Assert.Equal("Valor Inválido", message);

        }
    }

    public enum PublicoAlvo
    {
        Estudante,
        Universitario,
        Empregado,
        Empreendedor
    }

    public class Curso
    {
        public string Nome { get; set; }
        public int CargaHoraria { get; set; }
        public PublicoAlvo PublicoAlvo { get; set; }
        public double Valor { get; set; }

        public Curso(string nome, int cargaHoraria, PublicoAlvo publicoAlvo, double valor)
        {
            if (string.IsNullOrEmpty(nome))
                throw new ArgumentException("Nome Inválido");

            if(cargaHoraria < 1)
                throw new ArgumentException("Carga Horária Inválida");

            if (valor < 0)
                throw new ArgumentException("Valor Inválido");

            this.Nome = nome;
            this.CargaHoraria = cargaHoraria;
            this.PublicoAlvo = publicoAlvo;
            this.Valor = valor;
        }
    }
}
