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
                requested_amount = float(jsonData['business_requested_amount'])
                if(requested_amount != '' and requested_amount != None):
                    response = verifyLoanDecision(requested_amount)
                    json_tosend = {
                        "loan_decision": response}
                    self.send_response(json_tosend, HTTPStatus.BAD_REQUEST if(
                        response == constants.REQUEST_LOAN_INVALID) else HTTPStatus.OK)
            self.send_response(
                {"bad_request": "required data: \"Requested amount\""}, HTTPStatus.BAD_REQUEST)
        except ValueError as error:
            self.send_response(
                {"bad_request": "Data incorrect"}, HTTPStatus.BAD_REQUEST)
        except web.HTTPError as error:
            raise ServerError(error)
