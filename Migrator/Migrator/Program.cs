using System;
using Cassandra;

namespace Migrator
{
    class Program
    {
        static int Main(string[] args)
        {
            try
            {
                Cluster cluster = Cluster.Builder().AddContactPoint("db").WithPort(9042).WithQueryTimeout(600000)
                    .Build();
                ISession session = cluster.Connect();
                Console.ForegroundColor = ConsoleColor.Yellow;

                session.Execute(@"CREATE KEYSPACE 
            IF NOT EXISTS docker_practice
  WITH REPLICATION = { 
   'class' : 'SimpleStrategy', 
   'replication_factor' : 1 
  };");
                session.Execute(@"CREATE TABLE IF NOT EXISTS docker_practice.products (
   id int, 
   img text,
   name text,
   description text,
   price int,
   PRIMARY KEY (id));");


                session.Execute(@"INSERT INTO docker_practice.products (id,img,name,description,price)
  VALUES(1,'camera.jpg','Camera','Nice photo camera to save best moments of your life', 320);");

                session.Execute(@"INSERT INTO docker_practice.products (id,img,name,description,price)
  VALUES(2,'ball.jpg','Ball','Best ball ever', 30);");

                session.Execute(@"INSERT INTO docker_practice.products (id,img,name,description,price)
  VALUES(3,'sofa.jpeg','Sofa','Very comfortable sofa', 499);");

                session.Execute(@"INSERT INTO docker_practice.products (id,img,name,description,price)
  VALUES(4,'laptop.jpeg','Laptop','High speed, small weight', 1379);");

                session.Execute(@"INSERT INTO docker_practice.products (id,img,name,description,price)
  VALUES(5,'car.jpg','Car','Ready for your trip', 96999);");
                Console.WriteLine();
                Console.WriteLine("Cassandra database is ready");
                return 0;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine("Cannot prepare Cassandra database. Will try later...");
                return 1;
            }

        }
    }
}
