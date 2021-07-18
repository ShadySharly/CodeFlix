import requests, json, os
from elasticsearch import Elasticsearch
import pprint
import json

directory = '/'
es = Elasticsearch([{'host': 'localhost', 'port': '9200'}])

filename = "paginas (franco).json"
#filename = "documents-Youtube-new.json"
f = open(filename)
docket_content = f.read()
#print(docket_content)
# Send the data into es
es.index(index='bri', ignore=400, id=1, body=json.loads(docket_content)[0])