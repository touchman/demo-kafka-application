cd E:\kafka\kafka_2.13-2.7.1\bin\windows

./kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 10 --topic words-count-topic