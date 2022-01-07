import json
import websocket


ws = websocket.WebSocket()

# for sending random data
import random, time

ws.connect('ws://localhost:8000/ws/dashboard/')

timestamp = 0
for i in range(1000):
    timestamp += 1
    time.sleep(0.1)

    dataobj = {
        "data": [random.randint(1,100),random.randint(1,100),random.randint(1,100),random.randint(1,100),random.randint(1,100),random.randint(1,100),random.randint(1,100),random.randint(1,100)],
        "timestamp": timestamp
    }
    print(dataobj)


    
    ws.send(json.dumps(dataobj))

