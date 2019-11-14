import tornado.web
import tornado.gen
import tornado.ioloop

import abc
from abc import ABC, abstractmethod


class HttpDefaultHandler(tornado.web.RequestHandler):
    @tornado.gen.coroutine
    def get(self):
        self.write("Service up")
        self.finish()


class HttpHandler(tornado.web.RequestHandler):

    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with,content-type")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        

    def post(self, action):
        handler = getattr(self, str(action))
        handler(self.request.body)

    def send_response(self, data, status):
        self.set_status(status)
        self.write(data)
        self.finish()

    @tornado.gen.coroutine
    def options(self, action):
        self.set_status(204)
        self.finish()


class AbstractHandler(HttpHandler):
    __metaclass__ = abc.ABCMeta

    @abstractmethod
    def loanDecision(self):
        pass

    @abstractmethod
    def register(self, data):
        pass
