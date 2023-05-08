# tornado.web : web handlers (receive requests from protocols like get and post)
# thread that continuously waits / listens for result (This should always be running)
# regex101.com
import tornado.ioloop


class basicRequestHandler(tornado.web.RequestHandler):
    def get(self):  # idempotent request that retrieves stuff from server
        self.write("Hello")


class listRequestHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")


# can do localhost:8080/isEven?num=3 *query parameter*
class queryParameterRequestHandler(tornado.web.RequestHandler):
    def get(self):
        # retrieve from url
        num = self.get_argument("num")
        if num.isdigit():
            ans = "odd" if int(num) % 2 else "even"
            self.write(f"Integer {num} is {ans}")
        else:
            raise Exception("Num is not a valid integer")


# resource parameter : built into the URI
class resourceParamterRequestHandler(tornado.web.RequestHandler):
    def get(self, studentName, courseID):  # matches the regular expressions ()/()
        self.write(f"Welcome {studentName} the course you are viewing is {courseID}")


if __name__ == "__main__":  # initial code should only run once
    app = tornado.web.Application([
        # expects array of request handlers
        (r"/", basicRequestHandler),  # end point (localhost:8080/) | route and runs basicRequestHandler on request
        (r"/animal", listRequestHandler),  # for animals html (exposing server file to request)
        # end point with query parameter (if number is even or not)
        (r"/isEven", queryParameterRequestHandler),
        # resource parameter : hardcode
        # regular expressions : match, if you find any string/number after / : catch
        (r"/students/([a-z]+)/([0-9]+)", resourceParamterRequestHandler)  # studentID, course ID (+ : infinity)

    ])
    port = 8080
    app.listen(port)
    print(f"Application is ready and listening on port {port}")
    tornado.ioloop.IOLoop.current().start()  # keep doing this until application is up and running (LOOP)
