import tornado.web
import tornado.gen
import tornado.ioloop
import asyncio, selectors

from resources import parameter as PARAMETER

from adapters import handlers as HANDLER
from ports import requestedLoanHandler as PORTHANDLER

def main():
	selector = selectors.SelectSelector()
	loop = asyncio.SelectorEventLoop(selector)
	asyncio.set_event_loop(loop)
	portHandler = PORTHANDLER.RequestedLoanHandler
	application = tornado.web.Application([(r"/", HANDLER.HttpDefaultHandler),(r"/loan_api/(?P<action>[A-Za-z]+)?", portHandler)], debug=True)
	application.listen(PARAMETER.PORT)
	print("Ya esa corriendo")
	tornado.ioloop.IOLoop.current().start()

if __name__ == '__main__':
	main()