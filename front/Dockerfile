FROM public.ecr.aws/lambda/nodejs:18

WORKDIR ${LAMBDA_TASK_ROOT}

COPY ./package.json ./
COPY ./yarn.lock ./
RUN npm install --global yarn
RUN yarn install --frozen-lockfile
COPY . ./

CMD ["index.helloHandler"]