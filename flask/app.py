from flask import Flask,request
from elasticsearch import Elasticsearch

app = Flask(__name__)
es = Elasticsearch()

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/video",methods=["GET","ṔOST"])
def search_video():
    request_body = request.args.get('text')
    print(request_body)
    res = es.search(index="youtube", body={"query": {"match": {'titulo':request_body}}})
    return res

@app.route("/stack",methods=["GET","ṔOST"])
def search_stack():
    request_body = request.args.get('text')
    print(request_body)
    res = es.search(index="stackdocs", body={"query": {"match": {'titulo':request_body}}})
    return res

@app.route("/articles",methods=["GET","ṔOST"])
def search_articles():
    request_body = request.args.get('text')
    print(request_body)
    res = es.search(index="articles", body={"query": {"match": {'titulo':request_body}}})
    return res

if __name__ == "__main__":
    app.run(port=5000)