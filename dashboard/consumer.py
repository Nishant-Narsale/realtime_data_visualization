from channels.generic.websocket import AsyncWebsocketConsumer
import json
from time import sleep


class DashConsumer(AsyncWebsocketConsumer):
    
    async def connect(self):
        self.groupname = 'dashboard'
        await self.channel_layer.group_add(
            self.groupname,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):

        # await self.disconnect()
        pass

    async def receive(self, text_data=None):
        datapoint = json.loads(text_data)
        data = datapoint['data']
        timestamp = datapoint['timestamp']

        await self.channel_layer.group_send(
            self.groupname,
            {
                'type':'deprocessing',
                'data': data,
                'timestamp': timestamp
            }
        )

        print(">>>>>>",text_data)

        pass 

    async def deprocessing(self, event):
        data = event['data']
        timestamp = event['timestamp']
        await self.send(text_data=json.dumps({'data':data,'timestamp':timestamp}))