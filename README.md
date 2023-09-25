# nginx-node
Automate deployement of a node app with nginx forward proxy

## Start app
### pre-request 
- docker well installed
- docker-compose well installed
- Ports 80 and 5000 should be available

then run 
```bash
docker-compose up -- 
```

### Services
|Service|Port|Description|
|---|---|---|
|Nginx|80|Forward proxy, proxy traffic to target app|
|Node-app|5000|Node application|
