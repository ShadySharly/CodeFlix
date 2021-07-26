import requests, json, os
from elasticsearch import Elasticsearch
import pprint
import json

directory = '/'
es = Elasticsearch([{'host': 'localhost', 'port': '9200'}])

filename = "data-youtube-v5.json"
#filename = "documents-Youtube-new.json"
f = open(filename)
docket_content = f.read()
#print(docket_content)
# Send the data into es
for i in range(len(docket_content)-1):
    es.index(index='youtube', ignore=400, id=i, body=json.loads(docket_content)[i])