from flask import Flask,request
from elasticsearch import Elasticsearch
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
es = Elasticsearch()

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/video",methods=["GET","ṔOST"])
def search_video():
    request_body = request.args.get('text')
    print(request_body)
    res = es.search(index="youtube", body={"query": {"match": {'titulo':request_body}}})
    hits = res['hits']['hits']
    sources_out = []
    for hit in hits:
        source = hit['_source']
        sources_out.append(source)
        
    return json.dumps(sources_out)

@app.route("/stack",methods=["GET","ṔOST"])
def search_stack():
    request_body = request.args.get('text')
    print(request_body)
    
    res = es.search(index="stackdocs", body={"query": {"match": {'pregunta.titulo':request_body}}})
    hits = res['hits']['hits']
    sources_out = []
    for hit in hits:
        source = hit['_source']
        sources_out.append(source)
        
    return json.dumps(sources_out)

@app.route("/articles",methods=["GET","ṔOST"])
def search_articles():
    request_body = request.args.get('text')
    print(request_body)
    res = es.search(index="articles", body={"query": {"match": {'titulo':request_body}}})
    hits = res['hits']['hits']
    sources_out = []
    for hit in hits:
        source = hit['_source']
        sources_out.append(source)
        
    return json.dumps(sources_out)

@app.route("/video/others",methods=["GET","ṔOST"])
def search_video_others():
    request_body = request.args.get('id')
    print(request_body)
    
    video = es.search(index="youtube", body={"query": {"match": {'id':request_body}}})
   
    
    video_title = video['hits']['hits'][0]['_source']['titulo']

    stackdocs = es.search(index="stackdocs", body={"query": {"match": {'pregunta.titulo':video_title}}}) 
    if len(stackdocs['hits']['hits'][0])!=0:
        top_forum = stackdocs['hits']['hits'][0]
        forum_title = top_forum['_source']['pregunta']['titulo']
    else:
        forum_title = ""
        top_forum= ""
    #return top_forum

    articles = es.search(index="articles", body={"query": {"match": {'titulo':forum_title}}})
    if len(articles['hits']['hits']) != 0:
        top_article = articles['hits']['hits'][0]
    else:
        top_article = ""
    #top_article = articles['hits']['hits'][0]
    #return top_article
    
    final_result = {
        "video": video['hits']['hits'][0]['_source'],
        "articulo": top_article['_source'],
        "foro": top_forum['_source']
    }
    json_dump = json.dumps(final_result)
    return json_dump


@app.route("/forum/others",methods=["GET","ṔOST"])
def search_forum_others():
    request_body = request.args.get('id')
    print(request_body)
    
    forums = es.search(index="stackdocs", body={"query": {"match": {'pregunta.id':request_body}}})
    top_forum = forums['hits']['hits'][0]
    forum_title = top_forum['_source']['pregunta']['titulo']

    videos = es.search(index="youtube", body={"query": {"match": {'titulo':forum_title}}}) 

    if len(videos['hits']['hits'][0])!=0:
        top_video = videos['hits']['hits'][0]
        video_title = top_video['_source']['titulo']
    else:
        top_video = ""
        video_title= ""


    articles = es.search(index="articles", body={"query": {"match": {'titulo':video_title}}})

    if len(articles['hits']['hits']) != 0:
        top_article = articles['hits']['hits'][0]
    else:
        top_article = ""
    #top_article = articles['hits']['hits'][0]
    #return top_article
    
    final_result = {
        "video": top_video['_source'],
        "articulo": top_article['_source'],
        "foro": top_forum['_source']
    }
    json_dump = json.dumps(final_result)
    return json_dump
    
if __name__ == "__main__":
    app.run(port=5000)
