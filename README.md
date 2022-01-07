Dashboard for EEG data visualization

For sending continuous data you need to create a websocket connection with
ws://localhost:8000/ws/dashboard/

For running in demo mode a client.py file has been made which just connect with websocket and send random json data as EEG will generate probably.

Steps to run in development mode

1) Navigate to project folder and install all requirements in your virtualenv
pip install -r "requirements.txt"

2) Run the django server
python manage.py runserver

3) Go on localhost:8000

4) Open another command prompt other than django server and navigate to project folder and run 
python client.py




To send data from real EEG client you need to create a client.py like file and just replace sending random data with the data you have fetched (in json format).



