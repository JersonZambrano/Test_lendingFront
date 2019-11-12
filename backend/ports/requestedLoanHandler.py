from adapters import handlers as Handler
from resources import constants
import http
import json
from http import HTTPStatus


class RequestedLoanHandler(Handler.AbstractHandler):

    def loanDecision(self):
        return lambda requested_amount: constants.REQUEST_LOAN_APPROVED if (requested_amount > 0 and requested_amount < 50000) else constants.REQUEST_LOAN_DECLINED if requested_amount > 50000 else constants.REQUEST_LOAN_UNDECIDED if requested_amount == 50000 else constants.REQUEST_LOAN_INVALID

    def register(self, data):
        verifyLoanDecision = self.loanDecision()
        try:
            jsonData = json.loads(data)
            if ('business_requested_amount' in jsonData):
                if (jsonData['business_requested_amount'] == '' or jsonData['business_requested_amount'] == None):
                    self.send_response({"description":" Required \"Requested amount\""}, HTTPStatus.BAD_REQUEST)
                    self.finish()
                else:
                    requested_amount = float(jsonData['business_requested_amount'])
                    response = verifyLoanDecision(requested_amount)
                    print(response);
                    json_tosend = {
                        "loan_decision": response}
                    if constants.REQUEST_LOAN_INVALID != response:
                        self.send_response(json_tosend, HTTPStatus.OK)
                    else:
                        self.send_response(json_tosend, HTTPStatus.BAD_REQUEST)
                    self.finish()
            else:
                self.send_response(
                    {"bad_request": "badRequest"}, HTTPStatus.BAD_REQUEST)
                self.finish()

        except JSONDecodeError or ValueError as error:
            raise InvalidData(error)
        except web.HTTPError as error:
            raise ServerError(error)
