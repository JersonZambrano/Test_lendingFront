import tornado.web
import tornado.gen
import tornado.ioloop
import asyncio, selectors, sys, os

from resources import parameter as PARAMETER

from adapters import handlers as HANDLER
from ports import requestedLoanHandler as PORTHANDLER

def main():
	if (PARAMETER.OS_WINDOWS in os.environ):
		selector = selectors.SelectSelector()
		loop = asyncio.SelectorEventLoop(selector)
		asyncio.set_event_loop(loop)
	handler = PORTHANDLER.RequestedLoanHandler
	application = tornado.web.Application([(r"/", HANDLER.HttpDefaultHandler),(r"/loan_api/(?P<action>[A-Za-z]+)?", handler)], debug=True)
	application.listen(PARAMETER.PORT)
	print("Ya esa corriendo")
	tornado.ioloop.IOLoop.current().start()

if __name__ == '__main__':
	main()