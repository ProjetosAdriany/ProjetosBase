using Confluent.Kafka;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace poc_kafka_producer
{
    class Program
    {
        public static async Task Main()
        {
            var config = new ProducerConfig { BootstrapServers = "127.0.0.1:9092" };

            using var p = new ProducerBuilder<Null, string>(config).Build();

            {
                try
                {
                    var count = 0;
                    var testValue = @"{""ID_Shopping"":1,""CD_CNPJ"":""29173719000106"",
                                    ""NM_Loja"":""Loja Teste"",""NM_Razao_Social"":""Loja 001 - Teste API"",
                                    ""CD_Nota_Fiscal"":""53190804325717000911650010000000011890810714"",
                                    ""NR_Nota_Fiscal"":""89081309"",""DT_Emissao"":""2020 /10/06"",
                                    ""HR_Emissao"":""\u201C17:25:00"",""VL_Nota_Fiscal"":""2.99"",
                                    ""IN_Tipo_Nota"":""NFe"",""CD_Versao"":""4.00"",""IN_Modelo_Nota"":""Enviada"",
                                    ""Detalhe_Venda"":
                                        [{""CD_Produto"":""EL299"",
                                        ""NM_Produto"":""\u201CELASTICO\\/LACAROTE"",
                                        ""VL_Produto"":""2.99"",""CD_Unidade_Comercial"":""UN"",
                                        ""VL_Unitario"":""2.99"",""ID_CFOP"":""5102"",""NR_Item"":""1""}]}";

                    //var testValue = @"{""cd_json"":""jbFgMBLJxjEq / U5exNEAPD0M0jv2OaxCu / O021x8vcwlGQETL + 14YEUsPyNJ2xBD / EaZDRjdVQZ77dtvGQMdp1O0CuESc1yWlA4U59bq / " +
                    //             "2SS7uj5Fmj3eGjCYFhWwmGTYKoXtEP / AvdBm9c7L2u0DSk6FNCeQsz6PPRN7vMVTYbqyXyTRFdvFsiU4IhJOq5RE2Rfk6QkaOksFA0JFD4sTi24f0LqNb6xU + " +
                    //             "TTS5mmzDkAuRycRcksGJbKQ0PW3MpexucCZz / Y / SbHSkAc1Wb / k23 / R8etS0fbbxNTf / wS8kQ62jbG / nNLwMXAxE2KjRd / bKy / PDcUfAFTO + " +
                    //             "nw4S9k0PPA9lMrR6kq55FsfiBC1oayzaa2LTdr5A2AMkdYniYgvAcG4o / P0SnSsVcWX05BEDN37JNBcZka5FGPa8wrk7NwKFRiq8e / RXcQiKfzCpCY / " +
                    //             "yRNcH3bEsrNkELBnNrlfq40eE3S8QueF0H46oh / sbUmC7L2ILk2aso3fNLle1IaEtzPG95frcYIBvpUjGoB2gjJBtNuZ88EGAeEzHv1rX6wDOvQpvFQXdp3fsxKrda6 + " +
                    //             "X2hrMSSXTjJYLKkNiq2fF4lhZHaghRRjNbcd7FwpdKotRytf23aAKdm6dijWJxKOvdG0pxxtCGaBF3DW6uUlUORSiejUoNMq0bg1EPsmYC7b3wEp6nGmbfFRzACq8alEclQqImf8h32vPdIfVk23RqgcndVGS2fmHdwjFVSeWW0R1Fp3sBSvA8FR3BzxhGCvPqXDG7bBeD3Oh0Y3t2kBxZBa744xJcfvkDX65oU1LqIeQbAatJWvNUCerP17HsYX4RCq1mYrCvkQJs5SVqMGbtEUrzN1Ozl3YcraDqtvINiom2E5XjBg8ri + M / " +
                    //             "SSDJGeOeDZ915RrRmC6hRB2IO + o1piYlRK1lE / +EDEElPh / " +
                    //             "5i4r9Skkf6HCzaHYVHKrFnko3ETrBGGVorxCI5EEhBE7U2WsSc5MOFT18cIvQGBbeOVFrz8kauPonY5cF36x0AF69NGSt6D3yPe4750vcuACDJA8fLdN8wVrflJZReyG3VR3Uq4EIr94SOx7ggsYqToY6sqSj2Wjargk8b8Vd + " +
                    //             "tpcro4jLVP / 4CHsY + kv18a8XUHBygz0AoiKKQXLycIEHSQ0yi4HPIE91RS + W1UQ6yZSjjolBC / 5821cKl9 / FK0BajWNDUCH + AMAnJNUggum / HT2YXdBBk5T2NzZPgy / " +
                    //             "nlcVjN + b3vF9PLgGVZEFDjeUQEoEZ20Ex32NkflT3D8p / tV1Sqc7w5lwKkF2Zuuyzv8A5JrIR01y08jeiO2CFNLP + twHqiW5YBh19MquqZxXFtdYXfIXX6LNS5efI +/ nXjO5qmzc / " +
                    //             "mWCBZNQYjxznIV9NTMdbFNHn + Ti4n0Vhk / jKRNVmE6CQXEtybe5456qBHB9IGlRYlLFlUye0CPsjOfsF3nYA + SZcTKlMxJClZ01D / EXTPQyK9uVUe5a6kDjZitq4 + " +
                    //             "bzIMRbQBBFVgtB65yDNeyvlk3H81qLKeOhWA9M8LG8xQhwMLa4T7fyeGLufZm5052CI85jMjdw8FYM6DDhO8mMNHj4gPhlmZBUTsCUvktAC3nb + 3DjlFMkBo1VEStKtzJP8T + " +
                    //             "5Nekf7W66xWOq2QYOPW13YMJCSy87Aykzvbc9s8vexiafKuNDrTz0C + rhjuk8KtfZtfLXYcIwFW1NnqgZpgVf0wkowoKOU / KjxynL5qNApgOSwTNY4 + DM9wtVM9dYdzZft9h5bTTubirRK + " +
                    //             "vKyMex2BLBv2vl4AKzaI / aQQXxs9r0z0FmO1KxnWuH8l1DlFfyLftpAPuLB5K5BKnR2llwuG / iT5Uvcxpj8iYCt7oYl6BBVHNQ711VxAgWArCboVMPFayyFfMOADEqWEvaS00HOXlD8nCHX1MwctyYuTZ79Ca8tRNFvJ14J58pAytn / " +
                    //             "nB5fSXZiR5A6xVCaoN5h7A9egkr / 44yh5mdMVSjxUhwRzXjTggauR1AI21rV78PMr12MRIYU0 / zL4RI8sEPZW2k8trmhZcEruGiFUbQAri6ewcz6WFqSQaXEtWB / r5ZCLCoBN3ihiS / " +
                    //             "AezPjjbdNXHmTy9shJGhUHlqEESSa4fegn2kqIAJpmeRWCG5kcG + yJ38LiIlO7bYSoqLe0cAYvp0EJZ7MXjd8ZxkLGmXi / pI9eTRy8zKEWYXC + 1mOhRGHDolGTSGhfyXwX0rFcfkPM8ggLgWVBHIXm9bpmn6fUu079EBW6nG9vr7hVwvmy2Brpd / " +
                    //             "TYAUcc + vwaTpDrrDkeLm2FGoFokQh0hLhCDKjZ08PSq4g1YODSPG9eIda//e9n3/Lb6MM66Bwgdb30gqWErfqjtr4rebKEt0F2oG8hcI7vFzZSHJhr2jY/O1bGSALfPWDi+JfM2efgrv6ci8rEXBXQZ9cBVl3VaGgbSMb2QFfoRnou3Uh7O4Hxla/" +
                    //             "VZM7m1Xk6WgC+0b/jJqg79dEMVQGtVmBAJEpNiFWy4pLF3jhMiT2rzSY04lQ0KNRQTFj5XTr3A04SncT0VrJtNY8reV4/u7L/" +
                    //             "QpnKItNecAlKnQtKzPO6PB8HS/hUf89lyyCWXx8XH01ToJm5LfxDWzi2eOgU7AeYhlb+Mtqsd2QcRwbhNpjNiR82Hp6rvabk42cbtUDfx0WaiiXTDupZJvbdPdMR412C2pmuHo3BrAv5fcm9i4fNjd9fwSAVBtSQsAeoIqFYmidHH/DG+Lwza4Ns05CAwYyPiFy0peuhfXymg8KT7bYl53wUsA3lROFEIvqpF1D0tN/" +
                    //             "z9ljS1sBOyRhIdddJwJX8ktgmEZR2op9SP9lEd6r8b/9l2+WwDmebqljy/ijCfyhMvL9JZK1U7wB0wI0Hcz7olJ7ewHJBMRASTX0N2RZv/RqGIfN0obi1PVu0aKxUAOvcCf4hqapn7mIFuiRO/oF9lmVfV6NdEMLpjky0RWtQ4IIJJVdLpBEnE7cuwZU1BiZ1SqOD2wr/x9V5AdXV1cR1snP+K/1bYwVc8x0hBRCqMM7tJix9tXX/" +
                    //             "UC5leGDQ6VzE41la8hsLIrvn2fJQlbGJwmdapK1SXFzKydQQ2C+bDKErMKhyBU4Hkr4/zs+AnxFh0PgQsU64VhPW7Yh2SOw9Fc/IXxkzMSIpvpIt/KLHrrlol0iSe1U93fF/fouxvuGTd3++FYzAXEfuMx859G6THwVpA==|gcm|03437287000100}";
                    while (true)
                    {
                        var dr = await p.ProduceAsync("test-topic",
                            new Message<Null, string> { Value = testValue });

                        Console.WriteLine($"Delivered '{dr.Value}' to '{dr.TopicPartitionOffset} | {count}'");

                        Thread.Sleep(2000);
                    }
                }
                catch (ProduceException<Null, string> e)
                {
                    Console.WriteLine($"Delivery failed: {e.Error.Reason}");
                }
            }
        }
    }
}
