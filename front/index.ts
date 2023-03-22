import * as AWS from "aws-sdk"
import next from "next"
import serverless from "serverless-http"

const nextHandler = next({dev:false}).getRequestHandler()
export const helloHandler = serverless(nextHandler) 