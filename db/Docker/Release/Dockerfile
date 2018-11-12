FROM cassandra:latest

HEALTHCHECK --interval=2m --timeout=5s --start-period=1m \
    CMD [ $$(nodetool statusgossip) = running ]

CMD ["cassandra", "-f"]