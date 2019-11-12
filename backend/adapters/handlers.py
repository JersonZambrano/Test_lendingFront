import tornado.web
import tornado.gen
import tornado.ioloop
import json
import traceback
import logging
import sys

from errors import exceptions
from resources import messages as MESSAGE
from resources import parameter as PARAMETER
import abc
from abc import ABC, abstractmethod

import http
from http import HTTPStatus


class HttpDefaultHandler(tornado.web.RequestHandler):
    @tornado.gen.coroutine
    def get(self):
        self.write("Hola Mundo")
        self.finish()


class HttpHandler(tornado.web.RequestHandler):

    @tornado.gen.coroutine
    def post(self, action):
        try:
            if not hasattr(self, str(action)):
                raise ActionNotFound(action)
            handler = getattr(self, str(action))
            handler(self.request.body)
        except HTTPError or ServerError as error:
            self.send_response(error.message, error.code)
        except LoanAppError as error:
            self.send_response(error.message, error.code)

    def send_response(self, data, status):
        self.set_status(status)
        self.write(data)
        self.finish()


class AbstractHandler(HttpHandler):
    __metaclass__ = abc.ABCMeta

    @abstractmethod
    def loanDecision(self):
        pass

    @abstractmethod
    def register(self, data):
        pass
