using Confluent.Kafka;
using System;
using System.Threading;

namespace poc_kafka
{
    class Program
    {
        static void Main(string[] args)
        {
            var conf = new ConsumerConfig
            {
                GroupId = "test-consumer-group-8",
                BootstrapServers = "127.0.0.1:9092",
                AutoOffsetReset = AutoOffsetReset.Earliest
            };

            using var c = new ConsumerBuilder<Ignore, string>(conf).Build();

            {
                c.Subscribe("test-topic");

                var cts = new CancellationTokenSource();
                Console.CancelKeyPress += (_, e) => {
                    e.Cancel = true;
                    cts.Cancel();
                };

                try
                {
                    while (true)
                    {
                        var result =
                        c.Consume(
                            TimeSpan.FromMilliseconds(2500));
                        var message = result?.Message?.Value;
                        if (message == null)
                        {
                            break;
                        }

                        Console.WriteLine(
                            $"Received: {result.Message.Key}:{message} from partition: {result.Partition.Value}");

                        c.Commit(result);
                        Thread.Sleep(TimeSpan.FromSeconds(5));
                        //try
                        //{
                        //    var cr = c.Consume(cts.Token);
                        //    Console.WriteLine($"Consumed message '{cr.Value}' at: '{cr.TopicPartitionOffset}'.");
                        //}
                        //catch (ConsumeException e)
                        //{
                        //    Console.WriteLine($"Error occured: {e.Error.Reason}");
                        //}
                    }
                }
                catch (KafkaException e)
                {
                    Console.WriteLine($"Consume error: {e.Message}");
                    Console.WriteLine("Exiting producer...");
                }
                finally
                {
                    c.Close();
                }
            }
        }
    }
}
