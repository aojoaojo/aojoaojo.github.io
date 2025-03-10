FROM ubuntu:latest

# Definir variáveis de ambiente para evitar prompts durante a instalação
ENV DEBIAN_FRONTEND=noninteractive

# Atualizar o sistema e instalar dependências
RUN apt-get update && apt-get install -y \
    curl \
    git \
    sudo \
    && rm -rf /var/lib/apt/lists/*

# Instalar Node.js e npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Criar diretório de trabalho
WORKDIR /app

# Expor a porta padrão do Vite/React
EXPOSE 5173

# Comando padrão ao iniciar o container
CMD ["/bin/bash"]
