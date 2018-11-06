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
                Cluster cluster = Cluster.Builder().AddContactPoint("10.88.20.95").WithPort(9043).WithQueryTimeout(600000)
                    .Build();
                ISession session = cluster.Connect();
                Console.ForegroundColor = ConsoleColor.Yellow;
                session.Execute(@"CREATE  KEYSPACE docker_practice
  WITH REPLICATION = { 
   'class' : 'SimpleStrategy', 
   'replication_factor' : 1 
  };");


                session.Execute(@"CREATE TABLE docker_practice.products (
   id int, 
   img text,
   name text,
   description text,
   price int,
   PRIMARY KEY (id));");

                session.Execute(@"INSERT INTO docker_practice.products (id,img,name,description,price)
  VALUES(1,'/img/camera.jpg','Camera','Nice photo camera to save best moments of your life', 320);");

                session.Execute(@"INSERT INTO docker_practice.products (id,img,name,description,price)
  VALUES(2,'/img/ball.jpg','Ball','Best ball ever', 30);");

                session.Execute(@"INSERT INTO docker_practice.products (id,img,name,description,price)
  VALUES(3,'/img/sofa.jpeg','Sofa','Very comfortable sofa', 499);");

                session.Execute(@"INSERT INTO docker_practice.products (id,img,name,description,price)
  VALUES(4,'/img/laptop.jpeg','Laptop','High speed, small weight', 1379);");

                session.Execute(@"INSERT INTO docker_practice.products (id,img,name,description,price)
  VALUES(5,'/img/car.jpg','Car','Ready for your trip', 96999);");
                Console.WriteLine();
                Console.WriteLine("Cassandra database is ready");
                return 0;
            }
            catch (Exception)
            {
                Console.WriteLine();
                Console.WriteLine("Cannot prepare Cassandra database. Will try later...");
                return 1;
            }

        }
    }
}
