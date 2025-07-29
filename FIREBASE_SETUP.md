# Configuração do Firebase

## Variáveis de Ambiente Configuradas

O projeto foi configurado para usar as seguintes variáveis de ambiente do Firebase:

### Arquivo `.env`
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDrN53ml2EVks4irQ46NyatQYYeAUhnCN4
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=projeto-micronegocio.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=projeto-micronegocio
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=projeto-micronegocio.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1089524937822
NEXT_PUBLIC_FIREBASE_APP_ID=1:1089524937822:web:20f1528b5b1de4a43f30cf
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-Y8Q8SEYFSH
```

## Arquivos Modificados

### 1. `env.Configs.ts`
- Adicionada validação de variáveis de ambiente obrigatórias
- Logs de debug para desenvolvimento
- Carregamento automático das variáveis

### 2. `next.config.js`
- Adicionada seção `env` para garantir que as variáveis sejam expostas ao cliente
- Configuração para output standalone

### 3. `app/config/firebaseConfig.ts`
- Adicionados logs de debug para verificar se as configurações estão sendo carregadas
- Verificação de variáveis faltantes em desenvolvimento

### 4. `app/layout.tsx`
- Importação do arquivo `env.Configs.ts` para garantir carregamento das variáveis

## Como Funciona

1. **Carregamento de Variáveis**: O arquivo `env.Configs.ts` carrega as variáveis do arquivo `.env` usando `loadEnvConfig`
2. **Validação**: Em desenvolvimento, verifica se todas as variáveis obrigatórias estão presentes
3. **Exposição**: O `next.config.js` expõe as variáveis `NEXT_PUBLIC_*` para o cliente
4. **Inicialização**: O Firebase é inicializado apenas no lado do cliente com as configurações carregadas

## Verificação

Para verificar se tudo está funcionando:

1. Execute `npm run dev`
2. Abra o console do navegador
3. Você deve ver logs indicando que as variáveis foram carregadas corretamente
4. O Firebase deve inicializar sem erros

## Troubleshooting

Se houver problemas:

1. Verifique se o arquivo `.env` existe na raiz do projeto
2. Confirme que todas as variáveis estão presentes
3. Reinicie o servidor de desenvolvimento
4. Verifique os logs no console do navegador 