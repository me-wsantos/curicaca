## ABDI - Agência Brasileira de Desenvolvimento Industrial
## Projeto: Landing Page Curicaca
:earth_americas: <a href="https://curicaca.abdi.com.br/" target="_blank">Link para o projeto</a>
<br>
<hr>

### :zap: Tecnologias
* NextJs 14
* Node v20.9.0
* React ^18.2.0
* yarn 4.1.0

<br>
<hr>

## :computer: Deploy

##### Server prod 192.168.1.22 e 23 - /mnt/nfs/vol_SABDIPHP_PRD2/curicaca.abdi.com.br
##### Server hmg 192.168.1.1 - /mnt/nfs/NFS_SABDIWEB_HMG/hmgcuricaca.abdi.com.br

##### 1 - Baixar o código atualizado
  `git pull`

##### 2 - Instalar dependências
  `yarn`

##### 3 - Configurar start no package.json
  `"start": "next start -p 3005",`

##### 4- Rodar migration
  `npx prisma migrate dev` 

##### 5- Fazer o build da aplicação
  `yarn build`

##### 6 - Iniciar a aplicação
  `pm2 start npm --name "3005-curicaca" -- start`