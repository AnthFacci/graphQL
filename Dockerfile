FROM node:11.13.0

# diretório de trabalho dentro do container
WORKDIR /usr/src/app

# copiar apenas package.json primeiro (cache em camadas)
COPY package.json package-lock.json* ./

# instalar dependências
RUN npm install

# copiar o restante dos arquivos do projeto
COPY . .

# expor a porta padrão do Apollo Server
EXPOSE 4000

# rodar o script "start"
CMD ["npm", "start"]
