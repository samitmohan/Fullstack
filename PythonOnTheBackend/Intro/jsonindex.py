# JSON is standard
# Return list of fruits as json
import json

import tornado.ioloop


class mainRequestHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("fruitsAPI.html")


class listRequestHandler(tornado.web.RequestHandler):
    def get(self):
        with open("list.txt", "r") as fh:
            fruits = fh.read().splitlines()
        # return as json element
        self.write(json.dumps(fruits))  # takes python object

    def post(self):  # same end point will have different meaning depending on method
        fruit = self.get_argument("fruit")
        with open("list.txt", "a") as fh:
            fh.write(f"{fruit}\n")
        self.write(json.dumps({"message": "Fruit added!"}))


if __name__ == "__main__":
    app = tornado.web.Application([
        (r"/list", listRequestHandler),
        (r"/", mainRequestHandler)
    ])
    port = 8082
    app.listen(port)
    print(f"Application is ready and listening on {port}")
    tornado.ioloop.IOLoop.current().start()
